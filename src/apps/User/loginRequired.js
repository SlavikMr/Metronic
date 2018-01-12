import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { replaceRoute } from 'apps/Router';
import { makeSelectUserProfileToJs } from './selectors';

export const loginRequired = (Component) => {
  class AuthenticatedComponent extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      user: PropTypes.object.isRequired,
    };

    componentWillMount() {
      this.checkAuth(this.props.user);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.user);
    }

    checkAuth({ isAuthenticated }) {
      if (!isAuthenticated) {
        this.props.dispatch(replaceRoute('/login'));
      }
    }

    render() {
      const { user: { isAuthenticated } } = this.props;
      return (
        <div>
          {isAuthenticated ? <Component {...this.props} /> : null}
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    user: makeSelectUserProfileToJs(state),
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
};

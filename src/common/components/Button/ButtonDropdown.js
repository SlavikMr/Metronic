import React from 'react';
import { ButtonDropdown as BButtonDropdown } from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class ButtonDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  render() {
    const { children, mGroup, ...other } = this.props;
    const cls = classNames(
      { 'm-btn-group': mGroup },
    );
    return (
      <BButtonDropdown
        className={cls}
        {...other}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        {children}
      </BButtonDropdown>
    );
  }
}

ButtonDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  mGroup: PropTypes.bool,
};

ButtonDropdown.defaultProps = {
  mGroup: false,
};

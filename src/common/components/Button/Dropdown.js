import React from 'react';
import { Dropdown as BDropdown } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  render() {
    const { className, ...other } = this.props;
    const cls = classNames(className);
    return (
      <BDropdown
        className={cls}
        {...other}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      />
    );
  }
}

Dropdown.propTypes = {
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  className: '',
};

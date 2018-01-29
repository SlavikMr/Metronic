import React from 'react';
import PropTypes from 'prop-types';

export const DropdownItem = ({ children }) => (
  <a className="dropdown-item" href="#">{children}</a>
);

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
};

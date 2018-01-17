import React from 'react';
import PropTypes from 'prop-types';

const ToolsItem = ({ children }) => (
  <li className="m-portlet__nav-item">
    {children}
  </li>
);

ToolsItem.propTypes = {
  children: PropTypes.node.isRequired,
};

ToolsItem.defaultProps = {
  children: null,
};

export default ToolsItem;

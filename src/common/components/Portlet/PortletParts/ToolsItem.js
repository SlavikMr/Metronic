import React from 'react';
import PropTypes from 'prop-types';

const ToolsItem = ({ children = null }) => (
  <li className="m-portlet__nav-item">
    {children}
  </li>
);

ToolsItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToolsItem;

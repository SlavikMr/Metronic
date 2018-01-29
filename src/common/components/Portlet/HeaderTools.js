import React from 'react';
import PropTypes from 'prop-types';

const HeaderTools = ({ children, ...other }) => (
  <div className="m-portlet__head-tools" {...other}>
    {children}
  </div>
);

HeaderTools.propTypes = {
  children: PropTypes.node,
};

HeaderTools.defaultProps = {
  children: null,
};

export default HeaderTools;

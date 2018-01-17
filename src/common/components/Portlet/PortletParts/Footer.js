import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children }) => (
  <div className="m-portlet__foot">
    {children}
  </div>
);

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.defaultProps = {
  children: null,
};

export default Footer;

import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children = undefined }) => (
  <div className="m-portlet__foot">
    {children}
  </div>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;

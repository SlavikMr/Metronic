import React from 'react';
import PropTypes from 'prop-types';
// import Icon from './Icon';

const Header = ({ children = undefined }) => (
  <div className="m-portlet__head">
    {children}
  </div>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
// import Icon from './Icon';

const Header = ({ children }) => (
  <div className="m-portlet__head">
    {children}
  </div>
);

Header.defaultProps = {
  children: null,
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;

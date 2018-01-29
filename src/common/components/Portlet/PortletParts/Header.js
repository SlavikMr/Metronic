import React from 'react';
import PropTypes from 'prop-types';
// import Icon from './Icon';

const Header = ({ children }) => (
  <div className="m-portlet__head">
    {children}
  </div>
);

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;

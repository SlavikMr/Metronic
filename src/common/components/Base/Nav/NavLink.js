import PropTypes from 'prop-types';
import React from 'react';
import { NavLink as StrapNavLink } from 'reactstrap';
import classNames from 'classnames';

const NavLink = ({ lineType, children, className, ...other }) => {
  const linkClass = classNames({
    'm-tabs__link': lineType,
    [`${className}`]: className,
  });

  return (
    <StrapNavLink href="" {...other} className={linkClass} >
      {children}
    </StrapNavLink>
  );
};

NavLink.propTypes = {
  lineType: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

NavLink.defaultProps = {
  lineType: false,
  children: null,
  className: '',
};

export { NavLink };

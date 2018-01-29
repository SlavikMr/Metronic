import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavItem as StrapNavItem } from 'reactstrap';

const NavItem = ({ lineType, children, ...other }) => {
  const itemClass = classNames({
    'm-tabs__item': lineType,
  });

  return (
    <StrapNavItem className={itemClass} {...other} >
      {children}
    </StrapNavItem>
  );
};

NavItem.propTypes = {
  lineType: PropTypes.bool,
  children: PropTypes.node,
};

NavItem.defaultProps = {
  lineType: false,
  children: null,
};

export { NavItem };

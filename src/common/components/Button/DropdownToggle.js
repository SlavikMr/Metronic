import React from 'react';
import { DropdownToggle as BDropdownToggle } from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const DropdownToggle = ({ children, mBtn, mPill, ...other }) => {
  const cls = classNames(
    { 'm-btn': mBtn },
    { 'm-btn--pill-last': mPill },
  );

  return <BDropdownToggle {...other} className={cls} >{children}</BDropdownToggle>;
};

DropdownToggle.propTypes = {
  children: PropTypes.node.isRequired,
  mBtn: PropTypes.bool,
  mPill: PropTypes.bool,
};

DropdownToggle.defaultProps = {
  mBtn: false,
  mPill: false,
};

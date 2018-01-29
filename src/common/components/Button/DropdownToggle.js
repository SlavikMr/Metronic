import React from 'react';
import { DropdownToggle as BDropdownToggle } from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const DropdownToggle = ({ className, mBtn, mPill, ...other }) => {
  const cls = classNames(className, {
    'm-btn': mBtn,
    'm-btn--pill-last': mPill,
  });

  return <BDropdownToggle {...other} className={cls} />;
};

DropdownToggle.propTypes = {
  mBtn: PropTypes.bool,
  mPill: PropTypes.bool,
  className: PropTypes.string,
};

DropdownToggle.defaultProps = {
  mBtn: false,
  mPill: false,
  className: '',
};

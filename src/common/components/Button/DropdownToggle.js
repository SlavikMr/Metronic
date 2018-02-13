import React from 'react';
import { DropdownToggle as BDropdownToggle } from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const DropdownToggle = ({ className, mBtn, mPill, square, ...other }) => {
  const cls = classNames(className, {
    'm-btn': mBtn,
    'm-btn--pill-last': mPill,
    'm-btn--square': square,
  });

  return <BDropdownToggle {...other} className={cls} />;
};

DropdownToggle.propTypes = {
  mBtn: PropTypes.bool,
  mPill: PropTypes.bool,
  className: PropTypes.string,
  square: PropTypes.bool,
};

DropdownToggle.defaultProps = {
  mBtn: false,
  mPill: false,
  className: '',
  square: false,
};

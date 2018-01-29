import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { PillButton } from './Pill';

export const AirButton = (props) => {
  const { className, ...other } = props;

  const cls = classNames(className, 'm-btn--air');

  return <PillButton className={cls} {...other} />;
};

AirButton.propTypes = {
  className: PropTypes.string,
};

AirButton.defaultProps = {
  className: '',
};

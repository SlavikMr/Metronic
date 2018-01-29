import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Button } from './Default';

export const PillButton = (props) => {
  const { className, ...other } = props;

  const cls = classNames(className, 'm-btn--pill');

  return <Button {...other} className={cls} />;
};

PillButton.propTypes = {
  className: PropTypes.string,
};

PillButton.defaultProps = {
  className: '',
};

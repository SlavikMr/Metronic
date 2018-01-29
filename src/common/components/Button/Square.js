import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Button } from './Default';

export const SquareButton = (props) => {
  const { className, ...other } = props;

  const cls = classNames(className, 'm-btn--square');

  return <Button {...other} className={cls} />;
};

SquareButton.propTypes = {
  className: PropTypes.string,
};

SquareButton.defaultProps = {
  className: '',
};

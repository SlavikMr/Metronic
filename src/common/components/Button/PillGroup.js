import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ButtonGroup } from './Group';

export const PillButtonGroup = (props) => {
  const { className, ...other } = props;

  const cls = classNames(className, 'm-btn-group--pill');

  return <ButtonGroup {...other} className={cls} />;
};

PillButtonGroup.propTypes = {
  className: PropTypes.string,
};

PillButtonGroup.defaultProps = {
  className: '',
};

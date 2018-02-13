import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { PillButtonGroup } from './PillGroup';

export const AirButtonGroup = (props) => {
  const { className, ...other } = props;

  const cls = classNames(className, 'm-btn-group--air');

  return <PillButtonGroup {...other} className={cls} />;
};

AirButtonGroup.propTypes = {
  className: PropTypes.string,
};

AirButtonGroup.defaultProps = {
  className: '',
};

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Input as BInput } from 'reactstrap';

export const Input = (props) => {
  const { className, ...other } = props;

  const cls = classNames(className);

  return <BInput className={cls} {...other} />;
};

Input.propTypes = {
  className: PropTypes.string,
};

Input.defaultProps = {
  className: '',
};

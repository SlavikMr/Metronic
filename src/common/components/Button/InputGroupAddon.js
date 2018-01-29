import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { InputGroupAddon as BInputGroupAddon } from 'reactstrap';

export const InputGroupAddon = (props) => {
  const { className, ...other } = props;

  const cls = classNames(className);

  return <BInputGroupAddon className={cls} {...other} />;
};

InputGroupAddon.propTypes = {
  className: PropTypes.string,
};

InputGroupAddon.defaultProps = {
  className: '',
};

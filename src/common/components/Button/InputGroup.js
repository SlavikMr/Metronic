import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { InputGroup as BInputGroup } from 'reactstrap';

export const InputGroup = (props) => {
  const { className, ...other } = props;

  const cls = classNames(className);

  return <BInputGroup className={cls} {...other} />;
};

InputGroup.propTypes = {
  className: PropTypes.string,
};

InputGroup.defaultProps = {
  className: '',
};

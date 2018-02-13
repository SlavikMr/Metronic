import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { InputGroup as BInputGroup } from 'reactstrap';

export const InputGroup = (props) => {
  const { className, square, ...other } = props;

  const cls = classNames(className,
    { 'm-input-group--square': square },
  );

  return <BInputGroup className={cls} {...other} />;
};

InputGroup.propTypes = {
  className: PropTypes.string,
  square: PropTypes.bool,
};

InputGroup.defaultProps = {
  className: '',
  square: false,
};

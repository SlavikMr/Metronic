import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenu as BDropdownMenu } from 'reactstrap';
import classNames from 'classnames';

export const DropdownMenu = ({ className, ...other }) => {
  const cls = classNames(className);

  return <BDropdownMenu className={cls} {...other} />;
};

DropdownMenu.propTypes = {
  className: PropTypes.string,
};

DropdownMenu.defaultProps = {
  className: '',
};

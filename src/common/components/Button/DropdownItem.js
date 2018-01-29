import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItem as BDropdownItem } from 'reactstrap';
import classNames from 'classnames';

export const DropdownItem = ({ className, ...other }) => {
  const cls = classNames(className);

  if (other.tag === 'a') {
    return <BDropdownItem href="#" className={cls} {...other} />;
  }
  return <BDropdownItem className={cls} {...other} />;
};

DropdownItem.propTypes = {
  className: PropTypes.string,
};

DropdownItem.defaultProps = {
  className: '',
};

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ icon, color, className, ...other }) => {
  const iconClass = classNames({
    [`${icon}`]: icon,
    [`m--font-${color}`]: color,
    [`${className}`]: className,
  });
  return (
    <i className={iconClass} {...other} />
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  icon: '',
  color: '',
  className: '',
};

export { Icon };

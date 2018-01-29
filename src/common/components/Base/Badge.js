import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({ color, dot, small, wide, rounded, className, children, ...other }) => {
  const badgeClass = classNames({
    'm-badge': true,
    [`m-badge--${color}`]: color,
    'm-badge--dot': dot,
    'm-badge--dot-small': dot || small,
    'm-badge--wide': wide,
    'm-badge--rounded': rounded,
    [`${className}`]: className,
  });

  return (
    <span className={badgeClass} {...other}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  dot: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  wide: PropTypes.bool,
};

Badge.defaultProps = {
  children: null,
  className: '',
  color: '',
  dot: false,
  rounded: false,
  small: false,
  wide: false,
};

export { Badge };

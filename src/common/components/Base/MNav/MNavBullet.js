import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MNavBullet = ({ type, className, ...other }) => {
  const bulletClass = classNames({
    'm-nav__link-bullet': true,
    [`m-nav__link-bullet--${type}`]: type,
    [`${className}`]: className,
  });

  return (
    <span className={bulletClass} {...other}>
      <span />
    </span>
  );
};

MNavBullet.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

MNavBullet.defaultProps = {
  className: '',
  type: '',
};

export { MNavBullet };

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MNavSeparator = ({ className, ...other }) => {
  const separatorClass = classNames({
    'm-nav__separator': true,
    'm-nav__separator--fit': true,
    [`${className}`]: className,
  });
  return (
    <li className={separatorClass} {...other} />
  );
};

MNavSeparator.propTypes = {
  className: PropTypes.string,
};

MNavSeparator.defaultProps = {
  className: '',
};

export { MNavSeparator };

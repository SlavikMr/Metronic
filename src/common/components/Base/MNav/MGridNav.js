import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MGridNav = ({ children }) => {
  const navClass = classNames({
    'm-nav-grid': true,
  });
  return (
    <div className={navClass}>
      {children}
    </div>
  );
};

MGridNav.propTypes = {
  children: PropTypes.node,
};

MGridNav.defaultProps = {
  children: null,
};

export { MGridNav };

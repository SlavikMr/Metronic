import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'common/components/Base';

const MGridItem = ({ icon, className, onClick, children, ...other }) => {
  const gridItemClass = classNames({
    'm-nav-grid__item': true,
    [`${className}`]: className,
  });

  return (
    <a href="" className={gridItemClass} onClick={onClick} {...other}>
      { icon && <Icon icon={icon} className="m-nav-grid__icon" /> }
      <span className="m-nav-grid__text">
        {children}
      </span>
    </a>
  );
};

MGridItem.propTypes = {
  onClick: PropTypes.func,

  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
};

MGridItem.defaultProps = {
  onClick: () => {},

  children: null,
  className: '',
  icon: '',
};

export { MGridItem };

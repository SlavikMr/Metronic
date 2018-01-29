import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'common/components/Base';
import { MNavBullet } from './MNavBullet';

const MNavItem = ({ active, badge, bullet, children, className, disabled, icon, inline,
  onClick, ...other }) => {
  const navItemClass = classNames({
    'm-nav__item': true,
    'm-nav__item--active': active,
    'm-nav__item--disabled': disabled,
    [`${className}`]: className,
  });

  return (
    <li className={navItemClass} {...other}>
      <a href="" className="m-nav__link" onClick={onClick}>
        { icon && <Icon icon={icon} className="m-nav__link-icon" /> }
        { bullet && <MNavBullet type={bullet} /> }
        { !inline ? (
          <span className="m-nav__link-title ">
            <span className="m-nav__link-wrap">
              <span className="m-nav__link-text">
                {children}
              </span>
              { badge &&
                <span className="m-nav__link-badge">
                  {badge}
                </span>
              }
            </span>
          </span>
        ) : (
          <React.Fragment>
            <span className="m-nav__link-text">
              {children}
            </span>
            { badge &&
              <span className="m-nav__link-badge">
                {badge}
              </span>
            }
          </React.Fragment>
         )
        }
      </a>
    </li>
  );
};

MNavItem.propTypes = {
  onClick: PropTypes.func,

  active: PropTypes.bool,
  badge: PropTypes.element,
  bullet: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  inline: PropTypes.bool,
};

MNavItem.defaultProps = {
  onClick: () => {},

  active: false,
  badge: null,
  bullet: '',
  children: null,
  className: '',
  disabled: false,
  icon: '',
  inline: false,
};

export { MNavItem };

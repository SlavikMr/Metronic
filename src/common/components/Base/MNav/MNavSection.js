import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MNavSection = ({ first, children }) => {
  const sectionClass = classNames({
    'm-nav__section': true,
    'm-nav__section--first': first,
  });
  return (
    <li className={sectionClass}>
      <span className="m-nav__section-text">
        {children}
      </span>
    </li>
  );
};
MNavSection.propTypes = {
  first: PropTypes.bool,
  children: PropTypes.node,
};

MNavSection.defaultProps = {
  first: false,
  children: null,
};

export { MNavSection };

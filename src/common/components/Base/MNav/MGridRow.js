import React from 'react';
import PropTypes from 'prop-types';

const MGridRow = ({ children, ...props }) => (
  <div className="m-nav-grid__row" {...props} >
    {children}
  </div>
);

MGridRow.propTypes = {
  children: PropTypes.node,
};

MGridRow.defaultProps = {
  children: null,
};

export { MGridRow };

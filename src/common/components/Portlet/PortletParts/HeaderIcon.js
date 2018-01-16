import React from 'react';
import PropTypes from 'prop-types';

const HeaderIcon = ({ icon = '' }) => (
  <span className="m-portlet__head-icon">
    <i className={icon} />
  </span>
);

HeaderIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};
export { HeaderIcon };

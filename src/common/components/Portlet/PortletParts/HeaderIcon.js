import React from 'react';
import PropTypes from 'prop-types';

const HeaderIcon = ({ icon }) => (
  <span className="m-portlet__head-icon">
    <i className={icon} />
  </span>
);

HeaderIcon.defaultProps = {
  icon: '',
};

HeaderIcon.propTypes = {
  icon: PropTypes.string,
};

export { HeaderIcon };

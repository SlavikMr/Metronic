import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'common/components/Base';

const HeaderIcon = ({ icon }) => (
  <span className="m-portlet__head-icon">
    <Icon icon={icon} />
  </span>
);

HeaderIcon.propTypes = {
  icon: PropTypes.string,
};

HeaderIcon.defaultProps = {
  icon: '',
};

export { HeaderIcon };

import React from 'react';
import PropTypes from 'prop-types';

const ToolsIcon = ({ icon }) => (
  <a href="" className="m-portlet__nav-link m-portlet__nav-link--icon">
    <i className={icon} />
  </a>
);

ToolsIcon.defaultProps = {
  icon: 'la la-close',
};

ToolsIcon.propTypes = {
  icon: PropTypes.string,
};

export { ToolsIcon };

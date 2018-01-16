import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, subtitle }) => (
  <h3 className="m-portlet__head-text">
    {title}
    {subtitle && <small>{subtitle}</small>}
  </h3>
);

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Title;

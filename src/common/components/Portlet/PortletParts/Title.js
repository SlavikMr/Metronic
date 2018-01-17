import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './Subtitle';

const Title = ({ title, subtitle }) => (
  <h3 className="m-portlet__head-text">
    {title}
    {subtitle && <Subtitle subtitle={subtitle} /> }
  </h3>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

Title.defaultProps = {
  title: '',
  subtitle: '',
};

export default Title;

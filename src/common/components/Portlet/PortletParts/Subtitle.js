import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ subtitle }) => (
  <small>
    {subtitle}
  </small>
);

Subtitle.propTypes = {
  subtitle: PropTypes.string,
};

Subtitle.defaultProps = {
  subtitle: '',
};

export default Subtitle;

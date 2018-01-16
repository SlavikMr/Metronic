import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ subtitle }) => (
  <small>
    {subtitle}
  </small>
);

Subtitle.defaultProps = {
  subtitle: '',
};

Subtitle.propTypes = {
  subtitle: PropTypes.string,
};

export default Subtitle;

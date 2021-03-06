import React from 'react';
import { ButtonToolbar as BButtonToolbar } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ButtonToolbar = ({ className, mb3, justify, ...other }) => {
  const cls = classNames(className, {
    'mb-3': mb3,
    'justify-content-between': justify,
  },
  );

  return <BButtonToolbar {...other} className={cls} />;
};

ButtonToolbar.propTypes = {
  className: PropTypes.string,
  mb3: PropTypes.bool,
  justify: PropTypes.bool,
};

ButtonToolbar.defaultProps = {
  className: '',
  mb3: false,
  justify: false,
};

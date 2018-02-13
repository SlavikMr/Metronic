import React from 'react';
import { ButtonGroup as BButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ButtonGroup = ({ className, mGroup, mr2, air, ...other }) => {
  const cls = classNames(className, {
    'm-btn-group': mGroup,
    'mr-2': mr2,
    'm-btn-group--air': air,
  },
  );

  return <BButtonGroup {...other} className={cls} />;
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  mGroup: PropTypes.bool,
  mr2: PropTypes.bool,
  children: PropTypes.node.isRequired,
  air: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  className: '',
  mGroup: false,
  mr2: false,
  air: false,
};

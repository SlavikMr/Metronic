import React from 'react';
import { ButtonGroup as BButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ButtonGroup = ({ className, children, mGroup, mr2, ...other }) => {
  const cls = classNames(className,
    { 'm-btn-group': mGroup },
    { 'mr-2': mr2 },
  );

  return (
    <BButtonGroup {...other} className={cls}>
      {children}
    </BButtonGroup>
  );
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  mGroup: PropTypes.bool,
  mr2: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ButtonGroup.defaultProps = {
  className: '',
  mGroup: false,
  mr2: false,
};

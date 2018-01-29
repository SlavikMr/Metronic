import React from 'react';
import classNames from 'classnames';
import { Button as BButton } from 'reactstrap';
import PropTypes from 'prop-types';

export class Button extends React.Component {
  render() {
    const { wide, className, mBtn, mBtnCust, label,
      doubleOutline, bolder, upper, labelCol, ...other } = this.props;

    const cls = classNames(className,
      { 'm-btn--wide': wide },
      { 'm-btn': mBtn },
      { 'm-btn--custom': mBtnCust },
      { 'm-btn--label-accent': label },
      { 'm-btn--outline-2x': doubleOutline },
      { 'm-btn--bolder': bolder },
      { 'm-btn--uppercase': upper },
      { [`m-btn--label-${labelCol}`]: labelCol });

    return <BButton {...other} className={cls} />;
  }
}

Button.propTypes = {
  wide: PropTypes.bool,
  className: PropTypes.string,
  mBtn: PropTypes.bool,
  mBtnCust: PropTypes.bool,
  label: PropTypes.bool,
  doubleOutline: PropTypes.bool,
  bolder: PropTypes.bool,
  upper: PropTypes.bool,
  labelCol: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  className: '',
  mBtn: false,
  mBtnCust: false,
  label: false,
  doubleOutline: false,
  bolder: false,
  upper: false,
  labelCol: '',
};


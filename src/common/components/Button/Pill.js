import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Button } from './Default';

export class PillButton extends React.Component {
  render() {
    const { air, ...other } = this.props;
    const cls = classNames(
      { 'm-btn--pill': true },
      { 'm-btn--air': air });

    return <Button {...other} className={cls} />;
  }
}

PillButton.propTypes = {
  air: PropTypes.bool,
};

PillButton.defaultProps = {
  air: false,
};

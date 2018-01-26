import React from 'react';
import { PillButton } from './Pill';

class AirButton extends React.Component {
  render() {
    return <PillButton {...this.props} air />;
  }
}

export { AirButton };

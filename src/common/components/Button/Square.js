import React from 'react';
import { Button } from './Default';

export class SquareButton extends React.Component {
  render() {
    return <Button {...this.props} className="m-btn--square" />;
  }
}

import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
  };
  static defaultProps = {
    onChange: () => {},
    value: '',
  };

  onChange = (event) => {
    this.props.onChange(event.target.value, event);
  };

  render() {
    const { value, ...other } = this.props;
    return (
      <input type="text" value={value || ''} {...other} onChange={this.onChange} />
    );
  }
}

export default InputField;

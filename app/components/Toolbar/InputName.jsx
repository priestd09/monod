import React from 'react';

class InputName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name || '',
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const name = newProps.name;

    if (this.state.name !== name) {
      this.setState({ name });
    }
  }

  onChange(event) {
    const name = event.target.value;

    this.setState({ name });
  }

  onKeyDown(event) {
    if ('enter' === event.key.toLowerCase()) {
      this.props.onUpdateName(this.state.name);
    }
  }

  render() {
    return (
      <input
        value={this.state.name}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        className="input-name"
        type="text"
      />
    );
  }
}

InputName.propTypes = {
  name: React.PropTypes.string.isRequired,
  onUpdateName: React.PropTypes.func.isRequired,
};

export default InputName;

'use strict';

import React, { Component } from 'react';

class Volume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        type="range"
        value={this.props.value}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        onChange={this.props.onChange}
        name="volume" />
    );
  }
}

Volume.defaultProps = {
  min: 0,
  max: 100,
  step: 5
};

Volume.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.number,
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number
};

export default Volume;

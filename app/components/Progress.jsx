'use strict';

import React from 'react';

const Progress = (props) => (
  <progress value={this.props.currentTime} max={this.props.duration} />
)

Progress.propTypes = {
  duration: React.PropTypes.number.isRequired,
  currentTime: React.PropTypes.number.isRequired
};

export default Progress;

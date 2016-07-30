'use strict';

import React, { Component } from 'react';

function workOutProgressValue(duration, currentTime) {
  const difference = (duration - currentTime);
  const remainingTime = (duration - difference);
  const progressPercentage = (remainingTime / duration) * 100;

  return progressPercentage;
}

class Progress extends Component {
  render() {
    const progress = workOutProgressValue(this.props.duration, this.props.currentTime);

    return (<progress value={progress} max={this.props.max}></progress>);
  }
}

Progress.defaultProps = {
  max: 100
};

Progress.propTypes = {
  duration: React.PropTypes.number,
  currentTime: React.PropTypes.number,
  max: React.PropTypes.number
};

export default Progress;

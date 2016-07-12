'use strict';

import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { isPlaying } from '../actions/isPlaying';
import { hasStopped } from '../actions/hasStopped';

import Button from '../components/Button.jsx';

export class PlaybackControls extends Component {
  _onPlayButtonClick() {
    this.props.isPlayingAction(!this.props.isPlaying);
  }

  _onStopButtonClick() {
    this.props.hasStoppedAction(true);
  }

  render() {
    const text = this.props.isPlaying ? 'pause' : 'play';

    return (
      <div>
        <Button onClick={this._onPlayButtonClick.bind(this)} text={text} />
        <Button onClick={this._onStopButtonClick.bind(this)} text="stop" />
      </div>
    );
  }
}

PlaybackControls.propTypes = {
  isPlaying: React.PropTypes.bool,
  isPlayingAction: React.PropTypes.func,
  hasStoppedAction: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    isPlaying: state.playback.isPlaying
  };
}

function mapDispatchToProps(dispatch) {
  return {
    isPlayingAction: bindActionCreators(isPlaying, dispatch),
    hasStoppedAction: bindActionCreators(hasStopped, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaybackControls);

'use strict';

import _ from 'lodash';
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { isPlaying } from '../actions/isPlaying';
import { hasStopped } from '../actions/hasStopped';
import { setVolume } from '../actions/setVolume';
import { setFullscreen } from '../actions/setFullscreen';

import Button from '../components/Button.jsx';
import Volume from '../components/Volume.jsx';
import Progress from '../components/Progress.jsx';

export class PlaybackControls extends Component {
  _onPlayButtonClick() {
    this.props.isPlayingAction(!this.props.isPlaying);
  }

  _onStopButtonClick() {
    this.props.hasStoppedAction(true);
  }

  _onFullscreenButtonClick() {
    this.props.setFullscreenAction(!this.props.fullscreen);
  }

  _onVolumeChange(event) {
    const volumeValue = _.get(event, 'target.value');
    this.props.setVolumeAction(volumeValue);
  }

  render() {
    const playPauseButtonText = this.props.isPlaying ? 'pause' : 'play';
    const stopButtonText = 'stop';
    const fullscreenText = this.props.fullscreen ? 'exit fullscreen' : 'enter fullscreen';

    return (
      <div>
        <Progress currentTime={this.props.currentTime} duration={this.props.duration} />
        <Button onClick={this._onPlayButtonClick.bind(this)} text={playPauseButtonText} />
        <Button onClick={this._onStopButtonClick.bind(this)} text={stopButtonText} />
        <Button onClick={this._onFullscreenButtonClick.bind(this)} text={fullscreenText} />
        <Volume onChange={this._onVolumeChange.bind(this)} />
      </div>
    );
  }
}

PlaybackControls.propTypes = {
  isPlaying: React.PropTypes.bool,
  duration: React.PropTypes.number,
  currentTime: React.PropTypes.number,
  fullscreen: React.PropTypes.bool,
  isPlayingAction: React.PropTypes.func,
  hasStoppedAction: React.PropTypes.func,
  setVolumeAction: React.PropTypes.func,
  setFullscreenAction: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    isPlaying: state.playback.isPlaying,
    duration: state.playback.duration,
    currentTime: state.playback.currentTime,
    fullscreen: state.playback.fullscreen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    isPlayingAction: bindActionCreators(isPlaying, dispatch),
    hasStoppedAction: bindActionCreators(hasStopped, dispatch),
    setVolumeAction: bindActionCreators(setVolume, dispatch),
    setFullscreenAction: bindActionCreators(setFullscreen, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaybackControls);

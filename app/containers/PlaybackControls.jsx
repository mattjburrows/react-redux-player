'use strict';

import _ from 'lodash';
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { isPlaying } from '../actions/isPlaying';
import { hasStopped } from '../actions/hasStopped';
import { setVolume } from '../actions/setVolume';

import Button from '../components/Button.jsx';
import Volume from '../components/Volume.jsx';

export class PlaybackControls extends Component {
  _onPlayButtonClick() {
    this.props.isPlayingAction(!this.props.isPlaying);
  }

  _onStopButtonClick() {
    this.props.hasStoppedAction(true);
  }

  _onVolumeChange(event) {
    const volumeValue = _.get(event, 'target.value');
    this.props.setVolumeAction(volumeValue);
  }

  render() {
    const text = this.props.isPlaying ? 'pause' : 'play';

    return (
      <div>
        <Button onClick={this._onPlayButtonClick.bind(this)} text={text} />
        <Button onClick={this._onStopButtonClick.bind(this)} text="stop" />
        <Volume onChange={this._onVolumeChange.bind(this)} />
      </div>
    );
  }
}

PlaybackControls.propTypes = {
  isPlaying: React.PropTypes.bool,
  isPlayingAction: React.PropTypes.func,
  hasStoppedAction: React.PropTypes.func,
  setVolumeAction: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    isPlaying: state.playback.isPlaying
  };
}

function mapDispatchToProps(dispatch) {
  return {
    isPlayingAction: bindActionCreators(isPlaying, dispatch),
    hasStoppedAction: bindActionCreators(hasStopped, dispatch),
    setVolumeAction: bindActionCreators(setVolume, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaybackControls);

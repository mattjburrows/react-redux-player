'use strict';

import { IS_PLAYING } from '../actions/isPlaying';
import { HAS_STOPPED } from '../actions/hasStopped';
import { SET_VOLUME } from '../actions/setVolume';
import { SET_CURRENT_TIME } from '../actions/setCurrentTime';
import { SET_DURATION } from '../actions/setDuration';
import { SET_FULLSCREEN } from '../actions/setFullscreen';

const initialState = {
  isPlaying: false,
  hasStopped: true,
  volume: 50,
  currentTime: 0,
  duration: 0,
  fullscreen: false
};

function setIsPlayingState(isPlaying) {
  const newState = {
    isPlaying: isPlaying
  };

  if (isPlaying === false) return newState;

  return Object.assign({}, newState, {
    hasStopped: false
  });
}

function setHasStoppedState(hasStopped) {
  const newState = {
    hasStopped: hasStopped
  };

  if (hasStopped === false) return newState;

  return Object.assign({}, newState, {
    isPlaying: false
  });
}

function setVolumeState(volume) {
  return {
    volume: volume
  };
}

function setCurrentTimeState(currentTime) {
  return {
    currentTime: currentTime
  };
}

function setDurationState(duration) {
  return {
    duration: duration
  };
}

function setFullscreenState(fullscreen) {
  return {
    fullscreen: fullscreen
  };
}

export function playbackReducer(state = initialState, action) {
  switch (action.type) {
    case IS_PLAYING :
      return Object.assign({}, state, setIsPlayingState(action.isPlaying));
    case HAS_STOPPED :
      return Object.assign({}, state, setHasStoppedState(action.hasStopped));
    case SET_VOLUME :
      return Object.assign({}, state, setVolumeState(action.volume));
    case SET_CURRENT_TIME :
      return Object.assign({}, state, setCurrentTimeState(action.currentTime));
    case SET_DURATION :
      return Object.assign({}, state, setDurationState(action.duration));
    case SET_FULLSCREEN :
      return Object.assign({}, state, setFullscreenState(action.fullscreen));
    default:
      return state;
  }
}

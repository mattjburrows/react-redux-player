'use strict';

import { IS_PLAYING } from '../actions/isPlaying';
import { HAS_STOPPED } from '../actions/hasStopped';
import { SET_VOLUME } from '../actions/setVolume';
import { SET_PROGRESS } from '../actions/setProgress';

const initialState = {
  isPlaying: false,
  hasStopped: true,
  volume: 50,
  progress: 0
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

function setProgressState(progress) {
  return {
    progress: progress
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
    case SET_PROGRESS :
      return Object.assign({}, state, setProgressState(action.progress));
    default:
      return state;
  }
}

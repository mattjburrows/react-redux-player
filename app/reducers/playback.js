'use strict';

import { IS_PLAYING } from '../actions/isPlaying';
import { IS_PAUSED } from '../actions/isPaused';
import { HAS_STOPPED } from '../actions/hasStopped';

const initialState = {
  isPlaying: false,
  isPaused: false,
  hasStopped: true
};

function setIsPlayingState(isPlaying) {
  const newState = {
    isPlaying: isPlaying
  };

  if (isPlaying === false) return newState;

  return Object.assign({}, newState, {
    isPaused: false,
    hasStopped: false
  });
}

function setIsPausedState(isPaused) {
  const newState = {
    isPaused: isPaused
  };

  if (isPaused === false) return newState;

  return Object.assign({}, newState, {
    isPlaying: false,
    hasStopped: false
  });
}

function setHasStoppedState(hasStopped) {
  const newState = {
    hasStopped: hasStopped
  };

  if (hasStopped === false) return newState;

  return Object.assign({}, newState, {
    isPlaying: false,
    isPaused: false
  });
}

export function playbackReducer(state = initialState, action) {
  switch (action.type) {
    case IS_PLAYING :
      return Object.assign({}, state, setIsPlayingState(action.isPlaying));
    case IS_PAUSED :
      return Object.assign({}, state, setIsPausedState(action.isPaused));
    case HAS_STOPPED :
      return Object.assign({}, state, setHasStoppedState(action.hasStopped));
    default:
      return state;
  }
}

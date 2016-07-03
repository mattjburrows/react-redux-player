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

  if (isPlaying === true) {
    newState.isPaused = false;
    newState.hasStopped = false;
  }

  return newState;
}

function setIsPausedState(isPaused) {
  const newState = {
    isPaused: isPaused
  };

  if (isPaused === true) {
    newState.isPlaying = false;
    newState.hasStopped = false;
  }

  return newState;
}

function setHasStoppedState(hasStopped) {
  const newState = {
    hasStopped: hasStopped
  };

  if (hasStopped === true) {
    newState.isPlaying = false;
    newState.isPaused = false;
  }

  return newState;
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

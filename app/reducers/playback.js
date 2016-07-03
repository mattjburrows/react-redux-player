'use strict';

import { IS_PLAYING } from '../actions/isPlaying';
import { IS_PAUSED } from '../actions/isPaused';
import { HAS_STOPPED } from '../actions/hasStopped';

const initialState = {
  isPlaying: false,
  isPaused: false,
  hasStopped: true
};

export function setPlaybackState(state = initialState, action) {
  switch (action.type) {
    case IS_PLAYING :
      return Object.assign({}, state, {
        isPlaying: action.isPlaying,
        isPaused: !action.isPlaying
      });
    case IS_PAUSED :
      return Object.assign({}, state, {
        isPlaying: !action.isPaused,
        isPaused: action.isPaused
      });
    case HAS_STOPPED :
      return Object.assign({}, state, {
        hasStopped: action.hasStopped
      });
    default:
      return state;
  }
}

'use strict';

import { IS_PLAYING } from '../actions/isPlaying';
import { IS_PAUSED } from '../actions/isPaused';

const initialState = {
  isPlaying: false,
  isPaused: false
};

export function setPlaybackState(state = initialState, action) {
  switch (action.type) {
    case IS_PLAYING :
      return Object.assign(state, {
        isPlaying: action.isPlaying
      });
    case IS_PAUSED :
      return Object.assign(state, {
        isPaused: action.isPaused
      });
    default:
      return state;
  }
}

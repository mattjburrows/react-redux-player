'use strict';

import { IS_PLAYING } from '../actions/isPlaying';

const initialState = {
  isPlaying: false
};

export function setPlaybackState(state = initialState, action) {
  switch (action.type) {
    case IS_PLAYING :
      return Object.assign(state, {
        isPlaying: action.isPlaying
      });
    default:
      return state;
  }
}

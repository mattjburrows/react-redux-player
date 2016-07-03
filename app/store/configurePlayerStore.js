'use strict';

import { createStore, combineReducers } from 'redux';
import { playbackReducer } from '../reducers/playback';

export default function configureStore() {
  return createStore(
    combineReducers({
      playback: playbackReducer
    })
  );
}

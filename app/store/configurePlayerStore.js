'use strict';

import { createStore, combineReducers } from 'redux';
import { playbackReducer } from '../reducers/playback';

export default function configureStore() {
  const store = createStore(
    combineReducers({
      playback: playbackReducer
    })
  );

  return store;
}

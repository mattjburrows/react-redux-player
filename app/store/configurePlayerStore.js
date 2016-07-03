'use strict';

import { createStore } from 'redux';
import { playbackReducer } from '../reducers/playback';

export default function () {
  return createStore(playbackReducer);
}

'use strict';

import { setFullscreen } from '../actions/setFullscreen';

function setupDispatch(store, doc) {
  const state = store.getState();

  doc.addEventListener('webkitfullscreenchange', () => {
    store.dispatch(setFullscreen(!state.playback.fullscreen));
  });
}

export default (store, doc) => {
  setupDispatch(store, doc);

  return store.subscribe(() => {});
};

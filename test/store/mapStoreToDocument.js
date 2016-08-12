'use strict';

import assert from 'assert';
import sinon from 'sinon';

import configureStore from '../../app/store/configurePlayerStore';
import mapStoreToDocument from '../../app/store/mapStoreToDocument';
import { SET_FULLSCREEN } from '../../app/actions/setFullscreen';

const store = configureStore();
const sandbox = sinon.sandbox.create();

function createDocument(params) {
  const defaultDocument = {
    addEventListener: function addEventListener(name, cb) {
      this[name] = cb;
    }
  };

  return Object.assign({}, defaultDocument, params);
}

describe('mapStoreToDocument', () => {
  beforeEach(() => {
    sandbox.stub(store, 'getState');
    sandbox.stub(store, 'dispatch');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('triggers the set fullscreen action with false when the fullscreenchange event is triggered and fullscreen: true', () => {
    store.getState.returns({
      playback: {
        fullscreen: false
      }
    });
    const doc = createDocument();
    const unsubscribe = mapStoreToDocument(store, doc);

    doc.webkitfullscreenchange();

    assert(store.dispatch.calledWith({
      type: SET_FULLSCREEN,
      fullscreen: true
    }));

    unsubscribe();
  });

  it('triggers the set fullscreen action with true when the fullscreenchange event is triggered and fullscreen: false', () => {
    store.getState.returns({
      playback: {
        fullscreen: true
      }
    });
    const doc = createDocument();
    const unsubscribe = mapStoreToDocument(store, doc);

    doc.webkitfullscreenchange();

    assert(store.dispatch.calledWith({
      type: SET_FULLSCREEN,
      fullscreen: false
    }));

    unsubscribe();
  });
});

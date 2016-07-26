'use strict';

import assert from 'assert';
import sinon from 'sinon';
import _ from 'lodash';

import configureStore from '../../app/store/configurePlayerStore';
import mapStoreToPlayer from '../../app/store/mapStoreToPlayer';

const store = configureStore();
const sandbox = sinon.sandbox.create();

function setupPlayer(params) {
  const playSpy = sinon.spy();
  const pauseSpy = sinon.spy();
  const player = {
    play: playSpy,
    pause: pauseSpy,
    playSpy: playSpy,
    pauseSpy: pauseSpy,
    addEventListener: function addEventListener(name, cb) {
      this[name] = cb;
    }
  };

  return _.assign(player, params);
}

describe('mapStoreToPlayer', () => {
  beforeEach(() => {
    sandbox.stub(store, 'getState');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('store dispatches', () => {
    it('triggers the pause method when the dispatching IS_PLAYING: false', () => {
      const player = setupPlayer();
      store.getState.onCall(0).returns({
        playback: {
          isPlaying: true
        }
      });
      store.getState.onCall(1).returns({
        playback: {
          isPlaying: false
        }
      });
      const unsubscribe = mapStoreToPlayer(store, player);

      store.dispatch({type: 'FAKE_DISPATCH'});
      assert(player.pauseSpy.calledOnce);

      unsubscribe();
    });

    it('triggers the play method when the dispatching IS_PLAYING: true', () => {
      const player = setupPlayer();
      store.getState.onCall(0).returns({
        playback: {
          isPlaying: false
        }
      });
      store.getState.onCall(1).returns({
        playback: {
          isPlaying: true
        }
      });
      const unsubscribe = mapStoreToPlayer(store, player);

      store.dispatch({type: 'FAKE_DISPATCH'});
      assert(player.playSpy.calledOnce);

      unsubscribe();
    });

    it('triggers the pause method and resets the player when dispatching HAS_STOPPED: true', () => {
      const player = setupPlayer();
      store.getState.onCall(0).returns({
        playback: {
          hasStopped: false
        }
      });
      store.getState.onCall(1).returns({
        playback: {
          hasStopped: true
        }
      });
      const unsubscribe = mapStoreToPlayer(store, player);

      store.dispatch({type: 'FAKE_DISPATCH'});
      assert(player.pauseSpy.calledOnce);
      assert.equal(player.currentTime, 0);

      unsubscribe();
    });

    it('updates the volume of the player when dispatching SET_VOLUME', () => {
      const player = setupPlayer();
      store.getState.onCall(0).returns({
        playback: {
          volume: 50
        }
      });
      store.getState.onCall(1).returns({
        playback: {
          volume: 75
        }
      });
      const unsubscribe = mapStoreToPlayer(store, player);

      store.dispatch({type: 'FAKE_DISPATCH'});
      assert.equal(player.volume, 0.75);

      unsubscribe();
    });
  });

  describe('player events', () => {
    beforeEach(() => {
      sandbox.stub(store, 'dispatch');
    });

    it('dispatches HAS_STOPPED: true when the player ends', () => {
      const player = setupPlayer();
      const unsubscribe = mapStoreToPlayer(store, player);
      const expectedCallArgs = {
        type: 'HAS_STOPPED',
        hasStopped: true
      };

      player.ended();
      assert(store.dispatch.calledWith(expectedCallArgs));

      unsubscribe();
    });

    it('dispatched SET_PROGRESS: {NUMBER} when the timeupdate event is triggered', () => {
      const player = setupPlayer({
        currentTime: 75
      });
      const unsubscribe = mapStoreToPlayer(store, player);
      const expectedCallArgs = {
        type: 'SET_PROGRESS',
        progress: 75
      };

      player.timeupdate();
      assert(store.dispatch.calledWith(expectedCallArgs));

      unsubscribe();
    });
  });
});

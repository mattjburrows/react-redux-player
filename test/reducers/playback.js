'use strict';

import assert from 'assert';
import { IS_PLAYING } from '../../app/actions/isPlaying';
import { HAS_STOPPED } from '../../app/actions/hasStopped';
import { SET_VOLUME } from '../../app/actions/setVolume';
import { playbackReducer } from '../../app/reducers/playback';

describe('playbackState', () => {
  describe('isPlaying property', () => {
    it('defaults to false', () => {
      assert.strictEqual(playbackReducer(undefined, '').isPlaying, false);
    });

    it('{isPlaying: true, hasStopped: false} when action.isPlaying is true', () => {
      const state = playbackReducer(undefined, {
        type: IS_PLAYING,
        isPlaying: true
      });

      assert.strictEqual(state.isPlaying, true);
      assert.strictEqual(state.hasStopped, false);
    });

    it('{isPlaying: false} when action.isPlaying is false', () => {
      const state = playbackReducer(undefined, {
        type: IS_PLAYING,
        isPlaying: false
      });

      assert.strictEqual(state.isPlaying, false);
    });
  });

  describe('hasStopped property', () => {
    it('defaults to true', () => {
      assert.strictEqual(playbackReducer(undefined, '').hasStopped, true);
    });

    it('{isPlaying: false, hasStopped: true} when action.hasStopped is true', () => {
      const state = playbackReducer(undefined, {
        type: HAS_STOPPED,
        hasStopped: true
      });

      assert.strictEqual(state.isPlaying, false);
      assert.strictEqual(state.hasStopped, true);
    });

    it('{hasStopped: false} when action.hasStopped is false', () => {
      const state = playbackReducer(undefined, {
        type: HAS_STOPPED,
        hasStopped: false
      });

      assert.strictEqual(state.hasStopped, false);
    });
  });

  describe('volume property', () => {
    it('defaults to 7', () => {
      assert.strictEqual(playbackReducer(undefined, '').volume, 7);
    });

    it('{volume: 1} when action.volume is 1', () => {
      const state = playbackReducer(undefined, {
        type: SET_VOLUME,
        volume: 1
      });

      assert.strictEqual(state.volume, 1);
    });
  });
});

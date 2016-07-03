'use strict';

import assert from 'assert';
import { IS_PLAYING } from '../../app/actions/isPlaying';
import { IS_PAUSED } from '../../app/actions/isPaused';
import { setPlaybackState as playbackReducer } from '../../app/reducers/playback';

describe('playbackState', () => {
  describe('isPlaying property', () => {
    it('defaults to false', () => {
      assert.strictEqual(playbackReducer(undefined, '').isPlaying, false);
    });

    it('{isPlaying: true, isPaused: false} when isPlaying is true', () => {
      const state = playbackReducer(undefined, {
        type: IS_PLAYING,
        isPlaying: true
      });
      assert.strictEqual(state.isPlaying, true);
      assert.strictEqual(state.isPaused, false);
    });

    it('{isPlaying: false, isPaused: true} when isPlaying is false', () => {
      const state = playbackReducer(undefined, {
        type: IS_PLAYING,
        isPlaying: false
      });
      assert.strictEqual(state.isPlaying, false);
      assert.strictEqual(state.isPaused, true);
    });
  });

  describe('isPaused property', () => {
    it('defaults to false', () => {
      assert.strictEqual(playbackReducer(undefined, '').isPaused, false);
    });

    it('{isPlaying: false, isPaused: true} when isPaused is true', () => {
      const state = playbackReducer(undefined, {
        type: IS_PAUSED,
        isPaused: true
      });
      assert.strictEqual(state.isPaused, true);
      assert.strictEqual(state.isPlaying, false);
    });

    it('{isPlaying: true, isPaused: false} when isPaused is false', () => {
      const state = playbackReducer(undefined, {
        type: IS_PAUSED,
        isPaused: false
      });
      assert.strictEqual(state.isPaused, false);
      assert.strictEqual(state.isPlaying, true);
    });
  });
});

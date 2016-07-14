'use strict';

import assert from 'assert';
import { IS_PLAYING } from '../../app/actions/isPlaying';
import { IS_PAUSED } from '../../app/actions/isPaused';
import { HAS_STOPPED } from '../../app/actions/hasStopped';
import { playbackReducer } from '../../app/reducers/playback';

describe('playbackState', () => {
  describe('isPlaying property', () => {
    it('defaults to false', () => {
      assert.strictEqual(playbackReducer(undefined, '').isPlaying, false);
    });

    it('{isPlaying: true, isPaused: false, hasStopped: false} when action.isPlaying is true', () => {
      const state = playbackReducer(undefined, {
        type: IS_PLAYING,
        isPlaying: true
      });

      assert.strictEqual(state.isPlaying, true);
      assert.strictEqual(state.isPaused, false);
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

  describe('isPaused property', () => {
    it('defaults to false', () => {
      assert.strictEqual(playbackReducer(undefined, '').isPaused, false);
    });

    it('{isPlaying: false, isPaused: true, hasStopped: false} when action.isPaused is true', () => {
      const state = playbackReducer(undefined, {
        type: IS_PAUSED,
        isPaused: true
      });

      assert.strictEqual(state.isPlaying, false);
      assert.strictEqual(state.isPaused, true);
      assert.strictEqual(state.hasStopped, false);
    });

    it('{isPaused: false} when action.isPaused is false', () => {
      const state = playbackReducer(undefined, {
        type: IS_PAUSED,
        isPaused: false
      });

      assert.strictEqual(state.isPaused, false);
    });
  });

  describe('hasStopped property', () => {
    it('defaults to true', () => {
      assert.strictEqual(playbackReducer(undefined, '').hasStopped, true);
    });

    it('{isPlaying: false, isPaused: false, hasStopped: true} when action.hasStopped is true', () => {
      const state = playbackReducer(undefined, {
        type: HAS_STOPPED,
        hasStopped: true
      });

      assert.strictEqual(state.isPlaying, false);
      assert.strictEqual(state.isPaused, false);
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
});

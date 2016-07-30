'use strict';

import assert from 'assert';
import { IS_PLAYING } from '../../app/actions/isPlaying';
import { HAS_STOPPED } from '../../app/actions/hasStopped';
import { SET_VOLUME } from '../../app/actions/setVolume';
import { SET_CURRENT_TIME } from '../../app/actions/setCurrentTime';
import { SET_DURATION } from '../../app/actions/setDuration';
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
    it('defaults to 50', () => {
      assert.strictEqual(playbackReducer(undefined, '').volume, 50);
    });

    it('sets {volume: 75} when action.volume is 75', () => {
      const state = playbackReducer(undefined, {
        type: SET_VOLUME,
        volume: 75
      });

      assert.strictEqual(state.volume, 75);
    });
  });

  describe('currentTime property', () => {
    it('defaults to 0', () => {
      assert.strictEqual(playbackReducer(undefined, '').currentTime, 0);
    });

    it('sets {currentTime: 75} when action.currentTime is 75', () => {
      const state = playbackReducer(undefined, {
        type: SET_CURRENT_TIME,
        currentTime: 75
      });

      assert.strictEqual(state.currentTime, 75);
    });
  });

  describe('duration property', () => {
    it('defaults to 0', () => {
      assert.strictEqual(playbackReducer(undefined, '').duration, 0);
    });

    it('sets {duration: 75} when action.duration is 75', () => {
      const state = playbackReducer(undefined, {
        type: SET_DURATION,
        duration: 75
      });

      assert.strictEqual(state.duration, 75);
    });
  });
});

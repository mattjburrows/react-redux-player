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

    it('sets the property to true when passed in an isPlaying action with isPlaying set to true', () => {
      assert.strictEqual(playbackReducer(undefined, {
        type: IS_PLAYING,
        isPlaying: true
      }).isPlaying, true);
    });

    it('sets the property to false when passed in an isPlaying action with isPlaying set to false', () => {
      assert.strictEqual(playbackReducer(undefined, {
        type: IS_PLAYING,
        isPlaying: false
      }).isPlaying, false);
    });
  });

  describe('isPaused property', () => {
    it('defaults to false', () => {
      assert.strictEqual(playbackReducer(undefined, '').isPaused, false);
    });

    it('sets the property to true when passed in an isPaused action with isPaused set to true', () => {
      assert.strictEqual(playbackReducer(undefined, {
        type: IS_PAUSED,
        isPaused: true
      }).isPaused, true);
    });

    it('sets the property to false when passed in an isPaused action with isPaused set to false', () => {
      assert.strictEqual(playbackReducer(undefined, {
        type: IS_PAUSED,
        isPaused: false
      }).isPaused, false);
    });
  });
});

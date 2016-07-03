'use strict';

import assert from 'assert';
import { IS_PLAYING } from '../../app/actions/isPlaying';
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
});

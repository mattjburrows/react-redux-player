'use strict';

import assert from 'assert';
import { IS_PLAYING, isPlaying } from '../../app/actions/isPlaying';

describe('isPlaying', () => {
  it('returns an object with isPlaying: true', () => {
    const action = isPlaying(true);

    assert.equal(action.type, IS_PLAYING);
    assert.equal(action.isPlaying, true);
  });

  it('returns an object with isPlaying: false', () => {
    const action = isPlaying(false);

    assert.equal(action.type, IS_PLAYING);
    assert.equal(action.isPlaying, false);
  });
});

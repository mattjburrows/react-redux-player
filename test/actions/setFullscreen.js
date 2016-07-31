'use strict';

import assert from 'assert';
import { SET_FULLSCREEN, setFullscreen } from '../../app/actions/setFullscreen';

describe('setFullscreen', () => {
  it('returns an object with fullscreen: true', () => {
    const action = setFullscreen(true);

    assert.equal(action.type, SET_FULLSCREEN);
    assert.equal(action.fullscreen, true);
  });

  it('returns an object with fullscreen: false', () => {
    const action = setFullscreen(false);

    assert.equal(action.type, SET_FULLSCREEN);
    assert.equal(action.fullscreen, false);
  });
});

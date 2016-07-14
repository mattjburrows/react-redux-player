'use strict';

import assert from 'assert';
import { SET_VOLUME, setVolume } from '../../app/actions/setVolume';

describe('setVolume', () => {
  it('returns an object with the volume: {NUMBER}', () => {
    const action = setVolume(1);

    assert.equal(action.type, SET_VOLUME);
    assert.equal(action.volume, 1);
  });
});

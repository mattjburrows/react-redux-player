'use strict';

import assert from 'assert';
import { SET_DURATION, setDuration } from '../../app/actions/setDuration';

describe('setDuration', () => {
  it('returns an object with the duration: {NUMBER}', () => {
    const action = setDuration(35);

    assert.equal(action.type, SET_DURATION);
    assert.equal(action.duration, 35);
  });
});

'use strict';

import assert from 'assert';
import { SET_CURRENT_TIME, setCurrentTime } from '../../app/actions/setCurrentTime';

describe('setCurrentTime', () => {
  it('returns an object with the currentTime: {NUMBER}', () => {
    const action = setCurrentTime(50);

    assert.equal(action.type, SET_CURRENT_TIME);
    assert.equal(action.currentTime, 50);
  });
});

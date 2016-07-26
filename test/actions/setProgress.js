'use strict';

import assert from 'assert';
import { SET_PROGRESS, setProgress } from '../../app/actions/setProgress';

describe('setProgress', () => {
  it('returns an object with the progress: {NUMBER}', () => {
    const action = setProgress(50);

    assert.equal(action.type, SET_PROGRESS);
    assert.equal(action.progress, 50);
  });
});

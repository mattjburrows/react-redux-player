'use strict';

import assert from 'assert';
import { IS_PAUSED, isPaused } from '../../app/actions/isPaused';

describe('isPaused', () => {
  it('returns an object with isPaused: true', () => {
    const action = isPaused(true);

    assert.equal(action.type, IS_PAUSED);
    assert.equal(action.isPaused, true);
  });

  it('returns an object with isPaused: false', () => {
    const action = isPaused(false);

    assert.equal(action.type, IS_PAUSED);
    assert.equal(action.isPaused, false);
  });
});

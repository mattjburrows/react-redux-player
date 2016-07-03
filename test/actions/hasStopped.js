'use strict';

import assert from 'assert';
import { HAS_STOPPED, hasStopped } from '../../app/actions/hasStopped';

describe('hasStopped', () => {
  it('returns an object with hasStopped: true', () => {
    const action = hasStopped(true);

    assert.equal(action.type, HAS_STOPPED);
    assert.equal(action.hasStopped, true);
  });

  it('returns an object with hasStopped: false', () => {
    const action = hasStopped(false);

    assert.equal(action.type, HAS_STOPPED);
    assert.equal(action.hasStopped, false);
  });
});

'use strict';

export const HAS_STOPPED = 'HAS_STOPPED';

export function hasStopped(hasStopped) {
  return {
    type: HAS_STOPPED,
    hasStopped: hasStopped
  };
}

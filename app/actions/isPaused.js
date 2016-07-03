'use strict';

export const IS_PAUSED = 'IS_PAUSED';

export function isPaused(isPaused) {
  return {
    type: IS_PAUSED,
    isPaused: isPaused
  };
}

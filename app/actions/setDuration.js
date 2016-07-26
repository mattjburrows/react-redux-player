'use strict';

export const SET_DURATION = 'SET_DURATION';

export function setDuration(duration) {
  return {
    type: SET_DURATION,
    duration: duration
  };
}

'use strict';

export const SET_CURRENT_TIME = 'SET_CURRENT_TIME';

export function setCurrentTime(currentTime) {
  return {
    type: SET_CURRENT_TIME,
    currentTime: currentTime
  };
}

'use strict';

export const SET_VOLUME = 'SET_VOLUME';

export function setVolume(value) {
  return {
    type: SET_VOLUME,
    volume: value
  };
}

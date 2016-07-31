'use strict';

export const SET_FULLSCREEN = 'SET_FULLSCREEN';

export function setFullscreen(fullscreen) {
  return {
    type: SET_FULLSCREEN,
    fullscreen: fullscreen
  };
}

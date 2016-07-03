'use strict';

export const IS_PLAYING = 'IS_PLAYING';

export function isPlaying(isPlaying) {
  return {
    type: IS_PLAYING,
    isPlaying: isPlaying
  };
}

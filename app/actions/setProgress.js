'use strict';

export const SET_PROGRESS = 'SET_PROGRESS';

export function setProgress(progress) {
  return {
    type: SET_PROGRESS,
    progress: progress
  };
}

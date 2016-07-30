'use strict';

import { hasStopped } from '../actions/hasStopped';
import { setCurrentTime } from '../actions/setCurrentTime';
import { setDuration } from '../actions/setDuration';

function setupPlayer(player) {
  return {
    play: (isPlaying) => {
      if (isPlaying) player.play();
      else player.pause();
    },
    stop: (hasStopped) => {
      if (hasStopped) {
        player.pause();
        player.currentTime = 0;
      }
    },
    volume: (volume) => {
      player.volume = volume / 100;
    }
  };
}

function setupDispatch(store, player) {
  player.addEventListener('ended', () => store.dispatch(hasStopped(true)));
  player.addEventListener('loadedmetadata', () => {
    const duration = Math.ceil(parseFloat(player.duration));
    store.dispatch(setDuration(duration));
  });
  player.addEventListener('timeupdate', () => {
    const currentTime = parseFloat(player.currentTime);
    store.dispatch(setCurrentTime(currentTime));
  });
}

function isPlayingChanged(previousState, currentState) {
  return (previousState.playback.isPlaying !== currentState.playback.isPlaying);
}

function hasStoppedChanged(previousState, currentState) {
  return (previousState.playback.hasStopped !== currentState.playback.hasStopped);
}

function volumeChanged(previousState, currentState) {
  return (previousState.playback.volume !== currentState.playback.volume);
}

export default (store, video) => {
  const player = setupPlayer(video);
  let currentState = store.getState();

  setupDispatch(store, video);

  return store.subscribe(() => {
    const previousState = currentState;
    currentState = store.getState();

    if (isPlayingChanged(previousState, currentState)) return player.play(currentState.playback.isPlaying);
    if (hasStoppedChanged(previousState, currentState)) return player.stop(currentState.playback.hasStopped);
    if (volumeChanged(previousState, currentState)) return player.volume(currentState.playback.volume);
  });
};

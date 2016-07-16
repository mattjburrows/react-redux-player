'use strict';

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
    }
  };
}

function isPlayingChanged(previousState, currentState) {
  return (previousState.playback.isPlaying !== currentState.playback.isPlaying);
}

function hasStoppedChanged(previousState, currentState) {
  return (previousState.playback.hasStopped !== currentState.playback.hasStopped);
}

export default (store, video) => {
  const player = setupPlayer(video);
  let currentState = store.getState();

  return store.subscribe(() => {
    const previousState = currentState;
    currentState = store.getState();

    if (isPlayingChanged(previousState, currentState)) player.play(currentState.playback.isPlaying);
    if (hasStoppedChanged(previousState, currentState)) player.stop(currentState.playback.hasStopped);
  });
};

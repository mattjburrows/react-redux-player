'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configurePlayerStore';
import Fullscreen from './containers/Fullscreen.jsx';
import PlaybackControls from './containers/PlaybackControls.jsx';
import mapStoreToPlayer from './store/mapStoreToPlayer';

const store = configureStore();

class Player extends Component {
  componentDidMount() {
    mapStoreToPlayer(store, this.refs.video);
  }

  render() {
    return (<Provider store={store}>
      <Fullscreen>
        <video ref="video">
          <source src={this.props.src} />
        </video>
        <PlaybackControls />
      </Fullscreen>
    </Provider>);
  }
}

Player.propTypes = {
  src: React.PropTypes.string
};

export default Player;

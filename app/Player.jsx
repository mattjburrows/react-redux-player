'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configurePlayerStore';
import PlaybackControls from './containers/PlaybackControls.jsx';

const store = configureStore();

class Player extends Component {
  render() {
    return <Provider store={store}>
      <div>
        <video>
          <source src={this.props.src} />
        </video>
        <PlaybackControls />
      </div>
    </Provider>;
  }
}

Player.propTypes = {
  src: React.PropTypes.string
};

export default Player;

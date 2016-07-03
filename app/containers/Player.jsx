'use strict';

import { React, Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configurePlayerStore';

const store = configureStore();

export default class Player extends Component {
  render() {
    return <Provider store={store}>
      <div>
        <video src={this.props.src}></video>
      </div>
    </Provider>;
  }
}

Player.propTypes = {
  src: React.PropTypes.string
};

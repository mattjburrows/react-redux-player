'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Player from './containers/Player.jsx';

ReactDOM.render(
  React.createElement(Player, {
    src: '/SampleVideo_640x360_10mb.mp4'
  }),
  document.getElementById('app')
);

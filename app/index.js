'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player.jsx';

ReactDOM.render(
  React.createElement(Player, {
    src: './SampleVideo_720x480_1mb.mp4'
  }),
  document.getElementById('app')
);

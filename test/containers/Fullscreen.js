'use strict';

import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { Fullscreen } from '../../app/containers/Fullscreen.jsx';

describe('<Fullscreen />', () => {
  it('renders the children that are passed in with the component');

  describe('class names', () => {
    it('adds is-fullscreen when the component is fullscreen');
    it('adds is-embedded when the component is not fullscreen');
  });

  describe('event listeners', () => {
    it('adds the fullscreenchange event when the component is rendered');
    it('remove the fullscreenchange event when the component is removed');
  });
});

'use strict';

import React from 'react';
import assert from 'assert';
import { shallow, render } from 'enzyme';
import sinon from 'sinon';

import { PlaybackControls } from '../../app/containers/PlaybackControls.jsx';

describe('<PlaybackControls />', () => {
  it('should render 2 <Button /> components', () => {
    const wrapper = shallow(<PlaybackControls />);
    assert.equal(wrapper.find('Button').length, 2);
  });

  describe('play/pause <Button />', () => {
    it('sets play as the button text when isPlaying === false', () => {
      const wrapper = render(<PlaybackControls isPlaying={false} />);

      assert.equal(wrapper.find('button:nth-child(1)').text(), 'play');
    });

    it('sets pause as the button text when isPlaying === true', () => {
      const wrapper = render(<PlaybackControls isPlaying={true} />);

      assert.equal(wrapper.find('button:nth-child(1)').text(), 'pause');
    });

    it('calls the isPlayingAction with true when the button is clicked and isPlaying === false', () => {
      const isPlayingActionSpy = sinon.spy();
      const wrapper = shallow(<PlaybackControls isPlaying={false} isPlayingAction={isPlayingActionSpy} />);

      wrapper.find('Button').first().simulate('click');
      assert(isPlayingActionSpy.calledWith(true));
    });
  });

  describe('stop <Button />', () => {
    it('sets stop as the button text', () => {
      const wrapper = render(<PlaybackControls isPlaying={true} />);

      assert.equal(wrapper.find('button:nth-child(2)').text(), 'stop');
    });

    it('calls the hasStoppedAction with true when the button is clicked', () => {
      const hasStoppedActionSpy = sinon.spy();
      const wrapper = shallow(<PlaybackControls isPlaying={true} hasStoppedAction={hasStoppedActionSpy} />);

      wrapper.find('Button').at(1).simulate('click');
      assert(hasStoppedActionSpy.calledWith(true));
    });
  });
});

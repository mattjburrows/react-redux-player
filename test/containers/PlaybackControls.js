'use strict';

import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { PlaybackControls } from '../../app/containers/PlaybackControls.jsx';

describe('<PlaybackControls />', () => {
  it('should render 3 <Button /> components', () => {
    const wrapper = mount(<PlaybackControls />);
    assert.equal(wrapper.find('Button').length, 3);
  });

  describe('<Progress />', () => {
    it('renders the progress component with the correct duration and currentTime values', () => {
      const duration = 1000;
      const currentTime = 500;
      const wrapper = mount(<PlaybackControls duration={duration} currentTime={currentTime} />);

      assert.equal(wrapper.find('Progress').get(0).props.duration, duration);
      assert.equal(wrapper.find('Progress').get(0).props.currentTime, currentTime);
    });
  });

  describe('play/pause <Button />', () => {
    it('sets play as the button text when isPlaying === false', () => {
      const wrapper = mount(<PlaybackControls isPlaying={false} />);

      assert.equal(wrapper.find('Button').get(0).props.text, 'play');
    });

    it('sets pause as the button text when isPlaying === true', () => {
      const wrapper = mount(<PlaybackControls isPlaying={true} />);

      assert.equal(wrapper.find('Button').get(0).props.text, 'pause');
    });

    it('calls the isPlayingAction with true when the button is clicked and isPlaying === false', () => {
      const isPlayingActionSpy = sinon.spy();
      const wrapper = mount(<PlaybackControls isPlaying={false} isPlayingAction={isPlayingActionSpy} />);

      wrapper.find('Button').first().simulate('click');
      assert(isPlayingActionSpy.calledWith(true));
    });
  });

  describe('stop <Button />', () => {
    it('sets stop as the button text', () => {
      const wrapper = mount(<PlaybackControls isPlaying={true} />);

      assert.equal(wrapper.find('Button').get(1).props.text, 'stop');
    });

    it('calls the hasStoppedAction with true when the button is clicked', () => {
      const hasStoppedActionSpy = sinon.spy();
      const wrapper = mount(<PlaybackControls isPlaying={true} hasStoppedAction={hasStoppedActionSpy} />);

      wrapper.find('Button').at(1).simulate('click');
      assert(hasStoppedActionSpy.calledWith(true));
    });
  });

  describe.only('fullscreen <Button />', () => {
    it('sets "enter fullscreen" as the button text', () => {
      const wrapper = mount(<PlaybackControls isPlaying={true} fullscreen={false} />);

      assert.equal(wrapper.find('Button').get(2).props.text, 'enter fullscreen');
    });

    it('sets "exit fullscreen" as the button text', () => {
      const wrapper = mount(<PlaybackControls isPlaying={true} fullscreen={true} />);

      assert.equal(wrapper.find('Button').get(2).props.text, 'exit fullscreen');
    });

    it('calls the setFullscreen with true when the button is clicked', () => {
      const setFullscreenSpy = sinon.spy();
      const wrapper = mount(<PlaybackControls fullscreen={false} setFullscreenAction={setFullscreenSpy} />);

      wrapper.find('Button').at(2).simulate('click');
      assert(setFullscreenSpy.calledWith(true));
    });
  });

  describe('<Volume />', () => {
    it('calls the setVolumeAction', () => {
      const setVolumeActionSpy = sinon.spy();
      const wrapper = mount(<PlaybackControls setVolumeAction={setVolumeActionSpy} />);

      wrapper.find('Volume').simulate('change');
      assert(setVolumeActionSpy.calledOnce);
    });
  });
});

'use strict';

import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import Progress from '../../app/components/Progress.jsx';

describe('<Progress />', () => {
  it('adds 100 as the max value on the progress element', () => {
    const wrapper = shallow(
      <Progress />
    );

    assert.equal(wrapper.find('progress').prop('max'), 100);
  });

  it('adds 35 as the value on the progress tag', () => {
    const currentTime = 666;
    const duration = 2000;
    const wrapper = shallow(
      <Progress currentTime={currentTime} duration={duration} />
    );

    assert.equal(wrapper.find('progress').prop('value'), 34);
  });
});

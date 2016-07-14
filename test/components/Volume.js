'use strict';

import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Volume from '../../app/components/Volume.jsx';

describe('<Volume />', () => {
  it('renders the volume control with the correct value', () => {
    const value = 5;
    const wrapper = shallow(
      <Volume value={value} onChange={() => {}} />
    );

    assert.equal(wrapper.props().value, 5);
  });

  it('calls the onChange function', () => {
    const onChangeSpy = sinon.spy();
    const wrapper = shallow(
      <Volume onChange={onChangeSpy} />
    );
    wrapper.find('input').simulate('change');
    assert.equal(onChangeSpy.calledOnce, true);
  });
});

'use strict';

import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from '../../app/components/Button.jsx';

describe('<Button />', () => {
  it('calls the onClick prop when the button is clicked', () => {
    const onClickSpy = sinon.spy();
    const wrapper = shallow(
      <Button onClick={onClickSpy} />
    );

    wrapper.find('button').simulate('click');
    assert.equal(onClickSpy.calledOnce, true);
  });
  it('contains the text prop', () => {
    const text = 'Foo bar';
    const wrapper = shallow(
      <Button text={text} />
    );
    
    assert.equal(wrapper.text(), text);
  });
});

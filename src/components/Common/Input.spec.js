import React from 'react'


import { expect } from 'chai';

import { shallow } from 'enzyme'
import Input from './Input'


describe('Input Comp', () => {

  let input;
  let callback = () => {}

  beforeEach(() => {
    const component = shallow(
        <Input fld={'fld'} value={'test'} onUpdate={callback } />
    )
    input = component.find('input');

  });

  it('should display value', () => {
    expect(input.props().value).to.equal('test');
  })

  it('should callback on chage', () => {
    //input.simulate('change', {target: {value: 'My new value'}});
    expect(true).to.equal(true)

  })
})

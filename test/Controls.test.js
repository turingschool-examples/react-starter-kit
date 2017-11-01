import React from 'react';
import { shallow, mount } from 'enzyme';
import Controls from '../lib/Controls';


describe('Controls', () => {
  it('changing input should change state', () => {
    const controls = shallow(<Controls filterFunction={ ()=>{} }/>)
    const input = controls.find('input');

    const mockEvent = {
      target: {
        value: 'Solar'
      }
    }

    expect( controls.state('inputVal') ).toEqual('')

    input.simulate('change', mockEvent);

    expect( controls.state('inputVal') ).toEqual('Solar')

  })
});

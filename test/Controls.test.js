import React from 'react';
import Controls from '../lib/Controls.js'
import ufoData from '../lib/ufoData.js';
import { shallow, mount } from 'enzyme';

describe('Controls functionality', () => {
  it('should change state when search input changed', () => {
    const controls = shallow(<Controls />);
    const input = controls.find('input');

    expect(input.value).toEqual('');
    expect(controls.state('searchInput')).toEqual('');

    const event = { target: { value: 'area 51' } };

    input.simulate('change', event)

    expect(input.value).toEqual('area 51');
    expect(controls.state('searchInput')).toEqual('area 51');

    console.log(controls.debug())
  })
})

import React from 'react';
import { mount } from 'enzyme';
import Trivia from '../lib/Trivia.js';
import mockData from './testMocks.js';

describe('Trivia', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Trivia key='0' data={mockData.results[0]} bullshit='asdf' />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have the text we expect', () => {
    expect(wrapper.find('h4').text()).toEqual(' + Which of the following bones is not in the leg?')
  })

  it('should start with a showAnswer state of false', () => {
    expect(wrapper.state()).toEqual({ showAnswer: false });
  })

  it('should update state and show answer when h4 is clicked', () => {

    expect(wrapper.state()).toEqual({ showAnswer: false });
    expect(wrapper.find('h4').text()).toEqual(' + Which of the following bones is not in the leg?');
    expect(wrapper.find('span').length).toEqual(0);

    wrapper.find('h4').simulate('click');

    expect(wrapper.state()).toEqual({ showAnswer: true });
    expect(wrapper.find('h4').text()).toEqual(' - Which of the following bones is not in the leg?');
    expect(wrapper.find('span').text()).toEqual(' Radius ');

    wrapper.find('h4').simulate('click');

    expect(wrapper.state()).toEqual({ showAnswer: false });
    expect(wrapper.find('h4').text()).toEqual(' + Which of the following bones is not in the leg?');
    expect(wrapper.find('span').length).toEqual(0);
  })
})

  // simulating text/typing in enzyme:

  // wrapper.find('input').simulate('change', { target: { value: '5' } })
  //
  // wrapper.find('button').simulate('click');

import React from 'react';
import { shallow, mount } from 'enzyme';
import TriviaList from '../lib/TriviaList.js';
import mockData from './testMocks.js';

describe('TriviaList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TriviaList list={mockData.results} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should start with props', () => {
    expect(wrapper.instance().props.list).toEqual(mockData.results);
    expect(wrapper.instance().props.list.length).toEqual(10);
  })

  it('should render 10 Trivia components', () => {
    expect(wrapper.find('Trivia').length).toEqual(10);
    // console.log('shallow', wrapper.debug())
  })

  it('should mount 10 Trivia components', () => {
    wrapper = mount(<TriviaList list={mockData.results} />);
    // console.log('mount', wrapper.debug());

    // find 10 h4s
    // find that the first h4 has text matching the expected info from our mock data
    expect(wrapper.find('h4').length).toEqual(10);
    expect(wrapper.find('h4').first().text()).toEqual(' + Which of the following bones is not in the leg?')
  })
})

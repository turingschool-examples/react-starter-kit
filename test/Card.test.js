import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';


describe('Card', () => {
  it('should have a default state of showing a question', () => {
    const card = shallow(<Card />);

    expect( card.state('showQuestion') ).toEqual(true);
  })

  it('should toggle state when clicked', () => {
    const card = shallow(<Card />);

    expect( card.state('showQuestion') ).toEqual(true);
    expect( card.find('.answer').length ).toEqual(0);

    card.simulate('click');

    expect( card.state('showQuestion') ).toEqual(false);
    expect( card.find('.answer').length ).toEqual(1);

  })

  it('should render passed in question and answer', () => {
    const card = shallow(<Card question="What is the capitol of Kentucky?" />);
    const questionText = card.find('.question').text();

    // use props to replace question in the following line
    expect(questionText).toEqual('Question: ' + card.instance().props.question)
  });

  it('should render passed in index', () => {
    const card = shallow(<Card index={1}/>);

    // find the index

    // expect index to equal 1
  });

})
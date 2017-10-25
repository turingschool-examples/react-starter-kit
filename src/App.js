import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Stories from './Stories';
import Footer from './Footer';
import './App.css';

const stories = [
  {
    img: './story1.jpg',
    title: 'Winning at Fonts',
    desc: 'or, Why you should care about typography',
    authImg: './louisa.png',
    authName: 'Louisa',
    estTime: '2 min'
  },
  {
    img: './story2.jpg',
    title: 'Hoodlums: a dissertation',
    desc: 'Examining villains in modern storytelling',
    authImg: './alternate.png',
    authName: 'Nathaniel',
    estTime: '10 min'
  },
  {
    img: './story3.jpg',
    title: 'Halloween is a year-round sport',
    desc: 'Those who say otherwise just aren\'t trying hard enough.',
    authImg: './leta.png',
    authName: 'Leta',
    estTime: '8 min'
  },
  {
    img: './story4.jpg',
    title: 'How to Improve Learning and Classroom Engagement with Humor',
    desc: 'Okay, so first of all, everybody knows fart jokes are hilarious ...',
    authImg: './pamela.png',
    authName: 'Pamela',
    estTime: '11 min'
  }
]

const App = () => {
  return (
    <div className='App'>
      {/* add a Header component (already created) */}
      {/* add a Banner component (already created) */}
      <Stories  storiesTitle="Today's Top Stories"
                stories={stories} />
      {/* add another Stories component with storiesTitle 'Pop Culture', and just pass down the same stories array as the above Stories component (already created but will need some editing) */}
      {/* add a Footer Component (you will need to create this component in the provided Footer.js file) */}
    </div>
  );
}

export default App;

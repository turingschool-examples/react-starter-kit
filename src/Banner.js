import React from 'react';
import Button from './Button';
import './Banner.css';

const Banner = () => {
  return (
    <div className='Banner'>
      <div className='banner-left'>
        <h2>Interesting ideas that set your mind in motion</h2>
        <p>Hear directly from the people who know it best. From tech to politics to creativity and more — whatever your interest, we’ve got you covered.</p>
        <div className='button-holder'>
          <Button buttonType='dark'
                  buttonText='Get started' />
          <Button buttonType='light'
                  buttonText='Learn more' />
        </div>
      </div>
      <div className='banner-right'></div>
    </div>
  )
}

export default Banner;

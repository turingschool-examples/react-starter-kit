import React from 'react';
import ReactDom from 'react-dom';
import HeaderSection from './HeaderSection.jsx'
import InputSection from './InputSection.jsx'
import DisplaySection from './DisplaySection.jsx'

export default class Application extends React.Component {
  render() {
    return(
      <div>
        <header className='HeaderSection'>
          <HeaderSection word1='Number' word2='Guesser'/>
        </header>
        <section className='InputSection'>
          <InputSection />
        </section>
        <section className='DisplaySection'>
          <DisplaySection />
        </section>
      </div>
    )
  }
}

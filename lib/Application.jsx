import React from 'react';
import ReactDom from 'react-dom';
import HeaderSection from './HeaderSection.jsx'

export default class Application extends React.Component {
  render() {
    return(
      <div>
        <header className='HeaderSection'> {this.props.number}
          <HeaderSection />
        </header>
        <section className='InputSection'>
          {/* <InputSection /> */}
        </section>
        <section className='DisplaySection'>
          {/* <DisplaySection /> */}
        </section>
        <section className='ResetSection'>
          {/* <ResetSection /> */}
        </section>
      </div>
    )
  }
}

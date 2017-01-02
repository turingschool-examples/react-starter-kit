import React from 'react';
import ReactDom from 'react-dom';

export default class Application extends React.Component {
  render() {
    return(
      <div>
        <header className='HeaderSection'> {this.props.number}
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

// import React, { Component } from 'react';
//
// export default class SecreteNumber extends  Component {
//   constructor() {
//     super();
//     this.state = {
//       ranNum: ''
//     };
//   }
//
//   get ranNum() {
//     let genRanNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//     return this.sNum = genRanNum;
//   }
//
//
//   render() {
//     return(
//       <section className="SecreteNumber">
//         <h1>{this.ranNum}</h1>
//         // <button onClick={() => this.sNum = this.ranNum()}>New Number</button>
//       </section>
//     )
//   }
// }


import React, { Component } from 'react';

export default class SecreteNumber extends  Component {
  constructor() {
    super();
    // this.state = {
    //   sNum: null
    // };
  }
  //
  get ranNum() {
    let genRanNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    return this.sNum = genRanNum;
  }

  render() {
    return(
      <section className="SecreteNumber">
        <h1>{this.ranNum}</h1>
      </section>
    )
  }
}

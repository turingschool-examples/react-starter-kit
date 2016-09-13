const React = require('react');

export default class Header extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div>
      <h1>Hello Header</h1>
      <span>{this.props.number}</span>
      </div>
    )
  }
}

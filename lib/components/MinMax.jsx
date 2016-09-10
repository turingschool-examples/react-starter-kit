const React = require('react');
const ReactDOM = require('react-dom');
const ActionButton = require('./ActionButton');


class MinMax extends React.Component {
  constructor() {
    super();
    this.state = {
      minimum: 0,
      maximum: 0
    };
  }

  setMinimumNumber (num) {
    this.setState({minimum: this.state.minimum + num});
    console.log(this.state.minimum);
  }

  setMaximumNumber (num) {
    this.setState({maximum: this.state.maximum + num});
    console.log(this.state.maximum);

  }

  // componentDidMount() {
  //
  //   const minimum = document.querySelector('.MinNumber');
  //   const maximum = document.querySelector('.MaxNumber');
  //
  //   if (minimum) {
  //     return this.setState({ minimum: minimum });
  //     // setMinimumNumber(minimum);
  //   }
  //   console.log(minimum);
  //   if (maximum) {
  //     return this.setState({ maximum: maximum });
  //     // setMaximumNumber(maximum);
  //   }
  //   console.log(maximum);
  // }

  render () {
    return (
      <section className="MinMax">
        <article className="ActionButtons">
          <h3>Enter a minimum number</h3>
          <label>
          Minimum
            <input type="number" name="minimum" className="MinNumber"
              value={this.state.minimum}
              onChange={(e) => this.setState({ minimum: e.target.value })}
              />
          </label>
          <ActionButton text="Minimum" handleClick={this.setMinimumNumber.bind(this)} />
          <h3>Enter a maximum number</h3>
          <label>
          Maximum
            <input type="number" name="maximum" className="MaxNumber"
              value={this.state.maximum}
              onChange={(e) => this.setState({ maximum: e.target.value })}
              />
          </label>
          <ActionButton text="Maximum" handleClick={this.setMaximumNumber.bind(this)} />
        </article>
      </section>
    )
  }
}

module.exports = MinMax;

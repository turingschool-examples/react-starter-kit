import React from 'react';


export default class Row extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div>
        <span className='city'>
          {this.props.cityProp}
        </span>

        <span className='state'>
          {this.props.stateProp}
        </span>

        <span className='url'>
          {this.props.urlProp}
        </span>

        <span className='location'>
          <label className='latitude'>
            Latitude
            <span> {this.props.locProp[0]} </span>
          </label>

          <label className='longitude'>
            Longitude
            <span> {this.props.locProp[1]} </span>
          </label>

        </span>


      </div>
    )
  }
}

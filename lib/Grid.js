import React from 'react';
import Row from './Row';

export default class Grid extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div>
      {
        this.props.sightings.map( sighting => {
          return (
            <Row
              cityProp={sighting.city}
              stateProp={sighting.state}
              urlProp={sighting.url}
              locProp={sighting.loc} />
          )
        } )
      }
      </div>
    )
  }
}

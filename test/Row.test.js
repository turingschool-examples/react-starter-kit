import React from 'react';
import Row from '../lib/Row.js'
import ufoData from '../lib/ufoData.js';
import { shallow, mount } from 'enzyme';

describe('Row functionality', () => {
  const firstSighting = ufoData.sightings[0];
  const shallowRow = shallow(
    <Row
      cityProp={firstSighting.city}
      stateProp={firstSighting.state}
      urlProp={firstSighting.url}
      locProp={firstSighting.loc}/>
  );


  it('should find a city', () => {
    let city = shallowRow.find('.city');

    expect(city.text()).toEqual(firstSighting.city);
  })

  it('should find multiple props', () => {
    let city = shallowRow.find('.city');
    let state = shallowRow.find('.state');
    let url = shallowRow.find('.url');

    expect(city.text()).toEqual(firstSighting.city);
    expect(state.text()).toEqual(firstSighting.state);
    expect(url.text()).toEqual(firstSighting.url);
  })


  it('should find location', () => {
    const latitudeElem = shallowRow.find('.latitude');  // find latitude first
    const spanElem = latitudeElem.find('span'); // find span

    console.log(spanElem.debug())

    const latitude = spanElem.text(); // get text from span

    expect(parseFloat(latitude)).toEqual(firstSighting.loc[0]);
  })
})

import React from 'react';
import Grid from '../lib/Grid.js'
import ufoData from '../lib/ufoData.js';
import { shallow, mount } from 'enzyme';

describe('Grid functionality', () => {
  it('should display a Row for each sighting', () => {
    const grid = shallow(
      <Grid sightings={ufoData.sightings} />
    );

    console.log(grid.debug());

    const rows = grid.find('Row'); // find component name

    expect(rows.length).toEqual(100)
    expect(rows.length).toEqual(ufoData.sightings.length);
  })
})

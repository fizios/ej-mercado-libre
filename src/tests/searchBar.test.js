import React from "react";
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import SearchBar from '../components/searchBar';

const element = (
  <MemoryRouter>
    <SearchBar />
  </MemoryRouter>
);

describe('[ SEARCH BAR ]', () => {
  it('Renders and it matches snapshot', () => {
    const wrapper = renderer.create(element);
    expect(wrapper).toMatchSnapshot();
  });
});

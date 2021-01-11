import React from "react";
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import listMock from './mockJson/list.json';

import Item from '../components/item';

const mockProps = listMock.items[0];

const element = (
  <MemoryRouter>
    <Item {...mockProps} />
  </MemoryRouter>
);

describe('[ ITEM ]', () => {
  it('Renders and it matches snapshot', () => {
    const wrapper = renderer.create(element);
    expect(wrapper).toMatchSnapshot();
  });
});

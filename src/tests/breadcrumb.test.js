import React from "react";
import renderer from 'react-test-renderer';

import Breadcrumb from '../components/breadcrumb';

import listMock from './mockJson/list.json';

const categoriesMock = listMock.categories;

const element = (
    <Breadcrumb categories={categoriesMock} />
);

describe('[ BREADCRUMB ]', () => {
  it('Renders and it matches snapshot', () => {
    const wrapper = renderer.create(element);
    expect(wrapper).toMatchSnapshot();
  });
});

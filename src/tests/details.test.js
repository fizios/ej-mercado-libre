import React from "react";
import renderer from 'react-test-renderer';

import Details from '../components/details';

import detailsMock from './mockJson/details.json';

const element = (
  <Details details={detailsMock} />
);

describe('[ Details ]', () => {
  it('Renders and it matches snapshot', () => {
    const wrapper = renderer.create(element);
    expect(wrapper).toMatchSnapshot();
  });
});

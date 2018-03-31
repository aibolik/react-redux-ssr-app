import React from 'react';
import Loading from './index';
import renderer from 'react-test-renderer';

describe('Test Loading component', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

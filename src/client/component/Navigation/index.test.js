import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './index';
import renderer, { shollow as ShallowRenderer } from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';

describe('Test Navigation component', () => {
  const props = {
    user: {
      id: '5aa0dedae3fa01461ca2de06',
      name: 'Test Name'
    },
    logOut: jest.fn(() => {
      console.log('I am called')
    })
  };

  it('renders correctly without User props', () => {
    const tree = renderer.create(<BrowserRouter><Navigation /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with User props', () => {
    const tree = renderer.create(<BrowserRouter><Navigation {...props} /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

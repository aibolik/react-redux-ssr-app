import React from 'react';
import ReactDOM from 'react-dom';
import PostForm from './index';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestUtils from 'react-dom/test-utils';

describe('Test PostForm component', () => {
  const mockProps = {
    createPost: jest.fn(),
    author: {
      id: '5aa0dedae3fa01461ca2de06',
      name: 'Test Name'
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<PostForm />).toJSON();

    expect(tree).toMatchSnapshot();
  });

});

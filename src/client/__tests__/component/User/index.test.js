import React from 'react';
import ReactDOM from 'react-dom';
import User from '../../../component/User';
import renderer, { shollow as ShallowRenderer } from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';

describe('Test User component', () => {
  const userProps = {
    name: 'Test name',
    logOut: jest.fn(() => {
      console.log('I am called')
    })
  };

  it('renders correctly', () => {
    const tree = renderer.create(<User {...userProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has correct name property', () => {
    const tree = renderer.create(<User {...userProps} />);
    const root = tree.root;

    expect(root.findByProps({ className: 'user__name'}).children)
    .toEqual([userProps.name]);
  });

  it('logOut is correctly set to component', () => {
    const tree = renderer.create(<User {...userProps} />);
    const root = tree.root;

    const logOutElem = root.findByProps({ className: 'user__log-out'});

    expect(logOutElem.props.onClick).toEqual(userProps.logOut);
  });
});

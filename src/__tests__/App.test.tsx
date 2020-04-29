import React from 'react';
import {Platform} from 'react-native';
import renderer from 'react-test-renderer';

import App from './../App';

describe('App', () => {
  it('has the right amount of children', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree !== null && tree.children !== null).toBe(true);
    if (tree && tree.children !== null ) {
      expect(tree.children.length).toBe(Platform.OS === 'web' ? 6 : 7);
    }
  });
});

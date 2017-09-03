import React from 'react';
import Favorites from './Favorites';
import { shallow, mount } from 'enzyme';

describe('Favorites page', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<Favorites />)
  })

  test('should exist', () => {
    expect(wrapper).toBeDefined()
  })
})

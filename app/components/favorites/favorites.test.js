import React from 'react';
import Favorites from './Favorites';
import { shallow, mount } from 'enzyme';

describe('Favorites page', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<Favorites />)
  })

  test.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })
})

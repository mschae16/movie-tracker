import React from 'react';
import NavHeader from './NavHeader';
import { shallow, mount } from 'enzyme';

describe('Nav Header', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<NavHeader />)
  })

  test.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})

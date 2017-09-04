import React from 'react';
import Login from './Login';
import { shallow, mount } from 'enzyme';

describe('Login page', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<Login />)
  })

  test.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  test.skip('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      email: '',
      password: ''
    })
})

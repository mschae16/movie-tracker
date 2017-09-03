import React from 'react';
import Login from './login';
import { shallow, mount } from 'enzyme';

describe('Login page', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<Login />)
  })

  test('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  test('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      email: '',
      password: ''
    })
})

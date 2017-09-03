import React from 'react';
import CreateUser from './createuser';
import { shallow, mount } from 'enzyme';

describe('CreateUser page', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<CreateUser />)
  })

  test('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  test('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      name: '',
      email: '',
      password: ''
    })
})

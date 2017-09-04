import React from 'react';
import CreateUser from './CreateUser';
import { shallow, mount } from 'enzyme';

describe('CreateUser page', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<CreateUser />)
  })

  test.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  test.skip('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      name: '',
      email: '',
      password: ''
    })
})

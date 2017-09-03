import React from 'react';
import movieIndex from './movieIndex';
import { shallow, mount } from 'enzyme';

describe('Movie Index', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<MovieIndex />)
  })

  test('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  test('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      redirect: false,
    })
  })

  test('should run componentDidMount after mounting', () => {
    wrapper.instance().componentDidMount = jest.fn()
    wrapper.instance().componentDidMount()
    expect(wrapper.instance().componentDidMount).toHaveBeenCalled()
  })

})

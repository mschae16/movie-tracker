import React from 'react';
import NavHeader from './NavHeader';
import { shallow, mount } from 'enzyme';

describe('Nav Header', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<NavHeader />)
  })

  test('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  test('sign out button should log out on click', () => {
    wrapper.logoutReRender = jest.fn()
    let signOutBtn = wrapper.find('.sign-out-btn')
    signOutBtn.simulate('click')
    expect(wrapper.logoutReRender).toHaveBeenCalledTimes(1)
  })

})

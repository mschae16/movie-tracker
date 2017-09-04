import React from 'react';
import NavHeader from './NavHeader';
import { shallow, mount } from 'enzyme';

describe('Nav Header', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<NavHeader />)
  })

  afterEach(() => {
    localStorage.clear();
  });

  test('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  test('sign out button should log out on click', () => {
    wrapper.logoutReRender = jest.fn()
    let signOutBtn = wrapper.find('.sign-out-btn')
    signOutBtn.simulate('click')
    expect(wrapper.logoutReRender).toHaveBeenCalledTimes(1)
  })

  test('should be able to remove user from localStorage on sign out', () => {
    const user = { email: "margo@margo.com", password: "margo" };
    const loginComponent = shallow(<Login />);
    loginComponent.instance().sendToStorage(user);
    expect(localStorage.store.user).toEqual({
      email: "margo@margo.com",
      password: "margo"
    });

    wrapper.instance().logoutReRender();
    expect(localStorage.store.user.length).toEqual(0);
  })

})

import React from 'react';
import App from './app';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  test('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  test('returns appropriate components on home-page load', () => {
    expect(wrapper.find('NavHeaderContainer').length).toEqual(1)
    expect(wrapper.find('MovieIndex').length).toEqual(1)
  })

  test.skip('returns the create user page when the route path changes to /createuser', () => {

  })

  test.skip('returns the login page when the route path changes to /login', () => {

  })

  test.skip('returns the favorites page when the route path changes to /favorites and the user is logged-in appropriately', () => {

  })

})

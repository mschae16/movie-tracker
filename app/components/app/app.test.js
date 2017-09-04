import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it.skip('returns appropriate components on home-page load', () => {
    expect(wrapper.find('NavHeaderContainer').length).toEqual(1)
    expect(wrapper.find('MovieIndex').length).toEqual(1)
  })

  it.skip('returns the create user page when the route path changes to /createuser', () => {

  })

  it.skip('returns the login page when the route path changes to /login', () => {

  })

  it.skip('returns the favorites page when the route path changes to /favorites and the user is logged-in appropriately', () => {

  })

})

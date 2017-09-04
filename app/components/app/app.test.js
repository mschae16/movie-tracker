import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  })

  test('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  test('returns appropriate components on home-page load', () => {
    expect(wrapper.find('NavHeaderContainer').length).toEqual(1)
    expect(wrapper.find('MovieIndex').length).toEqual(1)
  })

  test('navigates around and the route path changes', () => {
    const renderTestSequence = ({
      subject: Subject,
      steps
    })

    const div = document.createElement('div')

    renderTestSequence({
      subject: wrapper,
      steps: [
        ({ history, div }) => {
          history.push('/')
        },

        ({ div }) => {
          Simulate.click(div.querySelector('.nav'))
        },

        ({ location }) => {
          console.assert(location.pathname === '/createuser')
        }]
      })
    })

})

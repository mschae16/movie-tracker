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

  test('should run componentDidMount after mounting and fetch data', () => {
    wrapper = mount(<MovieIndex />)
    wrapper.instance().fetchData = jest.fn()
    
    expect(wrapper.instance().componentDidMount).toHaveBeenCalled()
    expect(this.props.fetchData).toHaveBeenCalled()
  })

  test('should render the current movies upon mounting and fetching data', () => {
    expect(wrapper.find('section').length).toEqual(1)
  })

})

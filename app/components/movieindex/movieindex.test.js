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

  test('should fetch correct data after mounting', () => {
    mockFilmData = [
      {
        title: 'Annabelle: Creation',
        release: '2017-08-03',
        vote: 6.5 / 10
      },
      {
        title: 'Spider-Man: Homecoming',
        release: '2017-07-05',
        vote: 7.3 / 10
      }
    ]

    fetchMock.get('https://api.themoviedb.org/3/movie/now_playing?api_key=7a09ea0565fc41e80aedf1cf7fdbdd9c&language=en-US', {
      status: 200,
      body: mockFilmData
    })

    expect(fetchMock.routes[0].method).toEqual('GET')
    expect(fetchMock._matchedCalls.length).toEqual(0)
    expect(fetchMock.routes[0].response.body).toEqual(mockFilmData)

    expect(fetchMock.called()).toEqual(true)
  })

})

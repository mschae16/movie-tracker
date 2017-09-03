import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './movieCard';
import { shallow, mount } from 'enzyme';

describe('Movie Card', () => {
  let wrapper;
  let mountWrapper;

  beforeEach( () => {
    wrapper = shallow(<MovieCard />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should return a movie title element', () => {
    expect(wrapper.find('.movie-title').length).toEqual(1);
  })

  it('should return an image element', () => {
    expect(wrapper.find('.movie-image').length).toEqual(1);
  })

  it.skip('upon hover, it should display...', () => {

  })
})

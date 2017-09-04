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

  test('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  test('should return a movie title element', () => {
    expect(wrapper.find('.movie-title').length).toEqual(1);
  })

  test('should return an image element', () => {
    expect(wrapper.find('.movie-image').length).toEqual(1);
  })


  test('upon hover, it should display movie synopsis', () => {
    expect(wrapper.find('.info-hover').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(6)
  })

  test('should add to favorites when favorite button is clicked', () => {
    expect(wrapper.find('.favorited').length).toEqual(0);
    expect(wrapper.find('.favorite-button').length).toEqual(1);

    wrapper.instance().handleFavorites = jest.fn()

    Simulate.click(button.querySelector('.favorite-button'));
    expect(wrapper.instance().handleFavorites).toHaveBeenCalled()
    expect(wrapper.find('.favorited').length).toEqual(1);
  })
})

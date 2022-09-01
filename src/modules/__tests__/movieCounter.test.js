/**
 * @jest-environment jsdom
 */
/* eslint-disable*/
import MoviesManager from '../moviesManager.js';
import { getShows } from '../__mocks__/tvmazeApiMock.js';
import { getLikes } from '../__mocks__/getLikesMock.js';

describe('Task 1', () => {

  it('Send 5 movies', async () => {
    const moviesManager = new MoviesManager();
    const movies = await getShows();
    moviesManager.movies = movies;
    expect(moviesManager.totalItems).toBe(5);
  });

  it('Test 5 movies in virtual DOM', async () => {
    document.body.innerHTML = 
    `<div id="moviesSection"></div>`;

    const parentContainer = document.getElementById('moviesSection');
    const moviesManager = new MoviesManager(parentContainer);

    const movies = await getShows();

    moviesManager.movies = movies;
    moviesManager.display();

    const elements = document.querySelectorAll('.movie');
    expect(elements).toHaveLength(5);
  });
});
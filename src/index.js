import './styles/main.scss';
import * as tvMazeApi from './modules/tvmazeApi.js';
import * as invApi from './modules/involvementApi.js';
import MoviesManager from './modules/moviesManager.js';
import generateModal from './modules/commentsModal';

const moviesContainer = document.getElementById('moviesSection');
const moviesManager = new MoviesManager(moviesContainer);

tvMazeApi.getShows(moviesManager);
invApi.getLikes();

moviesContainer.addEventListener('click', (event) => {
  const idClicked = event.target;
  const regex = /(?<=movie)\d+$/;
  console.log('click on: ',idClicked);
});

generateModal();
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
  // we must look for the click but in the parent container the movieContainer
  // because when you click in the movie you click also in the image or text or title etc
  // so using the path and then filtering that path against a regex we check if the
  // click was in a movie container
  // then i will check if the array is empty the click did not happend on a movie.
  const arrMovie = event.path.filter((item) => /movieContainer-\d+/.test(item.id));

  /*
  * inside of each movieContainer we have 2 icons that will be clickable
  * we have a footer too so I dont want to open the modal that
  * if the user clicks either on an icon or the footer with the class movie__footer
  */
  if (/starBtn-\d+/.test(event.target.id) || /likeBtn-\d+/.test(event.target.id) || event.target.classList.contains('movie__footer')) {
    console.log('click on icons or footer');
    return;
  }

  if (arrMovie.length !== 0) {
    // get the id of the movie
    const movieId = arrMovie[0].id;
    const id = movieId.match(/\d+$/)[0];

    // call your modal here my friend
    // openModal(id);    or openModal(parseInt(id, 10)) to assure tha it is a num.
    console.log('click on the movie id: ', id);
  }
});

generateModal();
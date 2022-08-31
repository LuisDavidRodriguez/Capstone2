export default class MoviesManager {
  #parentContainer;

  #callBackAddLikeAsync;

  constructor(container, addLikeAsync) {
    this.#parentContainer = container;
    this.#callBackAddLikeAsync = addLikeAsync;
  }

  display(data, likes) {
    data.forEach((item) => {
      const { id: movieID } = item;
      // eslint-disable-next-line camelcase
      const movieLikes = likes.filter(({ item_id }) => item_id === movieID);
      const movie = this.#createMovie(item, movieLikes);
      this.#parentContainer.append(movie);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  #createMovie(data, movieLikes) {
    const movieContainer = document.createElement('article');
    const img = document.createElement('img');
    const movieBody = this.#createMovieBody(data);
    const footerMovie = this.#createFooter(data, movieLikes);

    movieContainer.className = 'movie';
    img.className = 'movie__img';

    img.src = data.image.medium;

    movieContainer.id = `movieContainer-${data.id}`;

    movieContainer.append(img, movieBody, footerMovie);
    return movieContainer;
  }

  // eslint-disable-next-line class-methods-use-this
  #createMovieBody({ name, summary }) {
    const movieBody = document.createElement('section');
    const title = document.createElement('h3');
    const description = document.createElement('p');

    movieBody.className = 'movie__body';
    title.className = 'movie__body__title';
    description.className = 'movie__body__description';

    /*
      the api delivers inside the summary some html items
      <p><b>Under the Dome</b> is the story of a small town that is su
      I will delete them well I will keep the <b> tags, I dont like to much cause
      i must use innerHtml
    */
    summary = summary.replace(/<[^b]>|<\/[^b]>/g, '');

    title.textContent = name;
    description.innerHTML = `${summary.substring(0, 70)}...`;

    movieBody.append(title, description);
    return movieBody;
  }

  // eslint-disable-next-line class-methods-use-this
  #createFooter({ id }, arrLikes) {
    const footer = document.createElement('section');
    const auxiliarDiv1 = document.createElement('div');
    const auxiliarDiv2 = document.createElement('div');
    const starInfo = document.createElement('span');
    const likeInfo = document.createElement('span');
    const starIcon = document.createElement('i');
    const likeIcon = document.createElement('i');

    footer.className = 'movie__footer';
    starIcon.className = 'fa-solid fa-star star-btn';
    likeIcon.className = 'fa-solid fa-heart like-btn';
    starInfo.className = 'info';

    // starInfo.id = 'starInfo';
    // likeInfo.id = 'likeInfo';
    starIcon.id = `starBtn-${id}`;
    likeIcon.id = `likeBtn-${id}`;

    // check if the movie has info about likes first
    if (arrLikes.length !== 0) {
      const { likes, stars } = arrLikes[0];
      starInfo.textContent = stars;
      likeInfo.textContent = likes;
    }

    likeIcon.addEventListener('click', () => {
      likeIcon.classList.add('fa-beat', 'active');
      likeIcon.style = '--fa-animation-duration: 0.5s;';
      const promise = this.#callBackAddLikeAsync(id);

      promise.then((result) => {
        const { status } = result;
        if (status === 201) {
          const previousLikes = parseInt(likeInfo.textContent, 10) || 0;
          likeInfo.textContent = 'added!';

          setTimeout(() => {
            likeInfo.textContent = previousLikes + 1;
          }, 1200);
        }
      });

      promise.finally(() => {
        likeIcon.classList.remove('fa-beat', 'active');
        likeIcon.style = '';
      });
    });

    auxiliarDiv1.append(starInfo, starIcon);
    auxiliarDiv2.append(likeInfo, likeIcon);

    footer.append(auxiliarDiv2);
    return footer;
  }
}
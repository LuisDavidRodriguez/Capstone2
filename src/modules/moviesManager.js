export default class MoviesManager {
  #parentContainer;

  constructor(container) {
    this.#parentContainer = container;
  }

  display(data) {
    console.log(data);
    data.forEach((item) => {
      const movie = this.#createMovie(item);
      this.#parentContainer.append(movie);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  #createMovie(data) {
    const movieContainer = document.createElement('article');
    const img = document.createElement('img');
    const movieBody = this.#createMovieBody(data);
    const footerMovie = this.#createFooter();

    movieContainer.className = 'movie';
    img.className = 'movie__img';

    img.src = data.image.medium;

    movieContainer.id = `movie${data.id}`;

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
  #createFooter() {
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

    // starInfo.id = 'starInfo';
    // likeInfo.id = 'likeInfo';
    // starIcon.id = 'starBtn';
    // likeIcon.id = 'likeBtn';

    auxiliarDiv1.append(starInfo, starIcon);
    auxiliarDiv2.append(likeInfo, likeIcon);

    footer.append(auxiliarDiv1, auxiliarDiv2);
    return footer;
  }
}
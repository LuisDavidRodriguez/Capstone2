/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import * as invApi from './involvementApi.js';

const paginatorInfo = document.getElementById('paginatorInfo');
const paginatorList = document.getElementById('paginatorList');
const text1 = document.createElement('span');
const text2 = document.createElement('span');
paginatorInfo.append(text1, text2);

const createPages = (moviesManager) => {
  const arrPages = [...moviesManager.getArrPages()];
  text1.textContent = `page: ${moviesManager.actualPage}, showing ${moviesManager.itemsDisplayed} titles`;
  text2.textContent = `from ${moviesManager.rangeDisplayed}. Total titles: ${moviesManager.totalItems}`;

  arrPages.forEach((page) => {
    const li = document.createElement('li');
    li.className = 'li-page';
    li.textContent = page;

    li.addEventListener('click', () => {
      pageClickHandler(moviesManager, li, page);
    });

    paginatorList.append(li);
  });

  const first = paginatorList.querySelectorAll('li')[0];
  first.classList.add('active');
};

const pageClickHandler = (moviesManager, li, page) => {
  const { parentContainer } = moviesManager;
  // select the previous element with the class active and remove it
  const arrItems = paginatorList.querySelectorAll('.active');
  arrItems.forEach((item) => item.classList.remove('active'));
  li.classList.add('active');

  // every time the user change a page i want to get again the likes in case other
  // users have added more likes
  invApi.getLikesHome().then((likes) => {
    moviesManager.likes = likes;
  });

  runAnimation(parentContainer).then(() => {
    window.scrollTo(0, 0);
    moviesManager.clearParent();
    moviesManager.display(page);
    text1.textContent = `page: ${moviesManager.actualPage}, showing ${moviesManager.itemsDisplayed} titles`;
    text2.textContent = `from ${moviesManager.rangeDisplayed}. Total titles: ${moviesManager.totalItems}`;
    window.history.pushState({ prevUrl: window.location.href }, 'title', `page-${page}`);
  });
};

const runAnimation = (parentContainer) => {
  // add a class to all the cards
  const movies = parentContainer.querySelectorAll('.movie');
  movies.forEach((movie) => movie.classList.add('animationOut'));

  // once the animation is done we resolve the promise
  // I just want to practise with promises jajajajajajajaja
  // it is not nessesarly at all
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

export default createPages;
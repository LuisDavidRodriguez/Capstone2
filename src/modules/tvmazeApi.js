const BASE_URL = 'https://api.tvmaze.com/shows';

const getShows = async (moviesManager) => {
  try {
    const result = await fetch(BASE_URL);
    const data = await result.json();
    const { status } = result;

    if (status !== 200) throw new Error('The pitition did not return 200');

    console.log(result);
    console.log(data);

    moviesManager.display(data);
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getShows };
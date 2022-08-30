const BASE_URL = 'https://api.tvmaze.com/shows';

const getShows = async () => {
  const result = await fetch(BASE_URL);
  const data = await result.json();
};

export default getShows;
const BASE_URL = 'https://api.tvmaze.com/shows';

// fetch a single show by id
const getShow = async (id) => {
  try {
    const result = await fetch(`${BASE_URL}/${id}`);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getShow;
/* eslint-disable */

// fetch a single show by id
const getShowData = async (id) => {
  return Promise.resolve(
    {
      id: 1,
      image: { medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg', original: '' },
      name: 'Under the Dome',
      summary: 'Under the Dome is the story of a',
      genres: ['Drama', 'Science-Fiction', 'Thriller'],
    },
  );
};
export default getShowData;

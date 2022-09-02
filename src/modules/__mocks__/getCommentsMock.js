/* eslint-disable */
const getComments = async () => {
  return Promise.resolve([
    {
      creation_date: '2022-08-31',
      comment: 'This is a mock comment 1',
      username: 'User 1',
    },
    {
      comment: "This is a mock comment 2",
      creation_date: '2022-08-31',
      username: 'User 2',
    },
    {
      username: 'User 3',
      comment: "This is a mock comment 3",
      creation_date: '2022-08-31',
    },
    {
      username: 'User 4',
      creation_date: '2022-09-01',
      comment: 'This is a mock comment 4',
    },
    {
      username: 'User 5',
      creation_date: '2022-09-01',
      comment: 'This is a mock comment 5',
    },
  ]);
};

export default getComments;
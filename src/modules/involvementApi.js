const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const GAME_ID = '3bifdQ3qgzMtAvx1V3Pc';

const getLikes = async () => {
  const result = await fetch(`${BASE_URL}${GAME_ID}/likes`);
  const data = await result.json();
  console.log(data);
};

const addLike = async (id) => {
  const body = JSON.stringify({ item_id: id });
  const headers = { 'Content-type': 'application/json; charset=UTF-8' };

  const result = await fetch(`${BASE_URL}${GAME_ID}/likes`, {
    method: 'POST',
    body,
    headers,
  });
  console.log(result);
};

export { getLikes, addLike };

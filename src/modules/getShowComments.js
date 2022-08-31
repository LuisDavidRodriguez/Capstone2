const BASE_URL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const GAME_ID = '3bifdQ3qgzMtAvx1V3Pc';
// Form elements
const nameInput = document.getElementById('name-input');
const commentTextArea = document.getElementById('comment-textarea');

const getComments = async (id) => {
  const result = await fetch(
    `${BASE_URL}${GAME_ID}/comments?item_id=item${id}`
  );
  const data = await result.json();
  return data;
};

const addComment = async (id) => {
  const username = nameInput.value;
  const comment = commentTextArea.value;
  const body = JSON.stringify({
    item_id: `item${id}`,
    username,
    comment,
  });
  const headers = { 'Content-type': 'application/json; charset=UTF-8' };

  const result = await fetch(`${BASE_URL}${GAME_ID}/comments`, {
    method: 'POST',
    body,
    headers,
  });
  console.log(result);
};

export { getComments, addComment };

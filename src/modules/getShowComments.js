const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const GAME_ID = '3bifdQ3qgzMtAvx1V3Pc';

const getComments = async (id) => {
  const result = await fetch(
    `${BASE_URL}${GAME_ID}/comments?item_id=item${id}`,
  );
  const data = await result.json();
  return data;
};

const printComments = (
  commentsPromise,
  id,
  commentsContainer,
  callback,
  commentsTitle,
) => {
  commentsPromise(id).then((comments) => {
    if (comments.error) {
      const li = document.createElement('li');
      const liText = document.createTextNode('No comments yet, be the first!');
      li.appendChild(liText);
      commentsContainer.appendChild(li);
      return 0;
    }
    let commentsCounter = 0;
    commentsContainer.innerHTML = '';
    comments.forEach((comment) => {
      commentsCounter += 1;
      const li = document.createElement('li');
      const liText = document.createTextNode(
        `${comment.username} on ${comment.creation_date}: ${comment.comment}`,
      );
      li.appendChild(liText);
      commentsContainer.appendChild(li);
    });
    callback(commentsCounter, commentsTitle);
    return commentsCounter;
  });
};

const addComment = async (username, comment, itemId) => {
  const body = JSON.stringify({
    item_id: `item${itemId}`,
    username,
    comment,
  });
  const headers = { 'Content-type': 'application/json; charset=UTF-8' };

  const result = await fetch(`${BASE_URL}${GAME_ID}/comments`, {
    method: 'POST',
    body,
    headers,
  });
  return result;
};

export { getComments, addComment, printComments };

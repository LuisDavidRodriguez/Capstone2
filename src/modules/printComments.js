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
      li.classList.add('comment');
      li.appendChild(liText);
      commentsContainer.appendChild(li);
    });
    callback(commentsCounter, commentsTitle);
    return commentsCounter;
  });
};

export default printComments;
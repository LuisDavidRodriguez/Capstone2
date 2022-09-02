const updateCommentsCounter = (commentsNumber, commentsTitle) => {
  const commentsTitleText = document.createTextNode(`Comments (${commentsNumber})`);
  commentsTitle.replaceChild(commentsTitleText, commentsTitle.firstChild);
};

export default updateCommentsCounter;
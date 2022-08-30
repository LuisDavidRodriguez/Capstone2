import getShowData from './getShowData.js';

const generateModal = (id) => {
  // get the show data
  const promise = getShowData(id);
  promise.then((showData) => {
    console.log(showData);
    // Grabs the modal generator
    const modalGenerator = document.querySelector('#modal-generator');

    // Creates all elements for the modal
    const modalContainer = document.createElement('div');
    const commentsModal = document.createElement('div');
    const closeBtn = document.createElement('button');
    const img = document.createElement('img');
    const title = document.createElement('h1');
    const ulDetails = document.createElement('ul');
    const genres = document.createElement('li');
    const premiered = document.createElement('li');
    const status = document.createElement('li');
    const url = document.createElement('a');
    const h2Comments = document.createElement('h2');
    const ulComments = document.createElement('ul');
    // Here should be generated the comments from the API
    // run a loop and create a li for each comment
    const h2AddComment = document.createElement('h2');
    const form = document.createElement('form');
    const nameInput = document.createElement('input');
    const commentTextArea = document.createElement('textarea');
    const submitBtn = document.createElement('button');

    // Adds classes to the elements
    modalContainer.classList.add('modal-container');
    commentsModal.classList.add('comments-modal');
    closeBtn.classList.add('close-modal');
    ulDetails.classList.add('details');
    ulComments.classList.add('comments');

    // Adds attributes to the elements
    img.src = showData.image.medium;
    url.href = showData.url;
    url.target = '_blank';
    url.rel = 'noopener noreferrer';
    form.setAttribute('action', '#');
    form.setAttribute('method', 'POST');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('placeholder', 'Your name');
    nameInput.id = 'name-input';
    commentTextArea.setAttribute('name', 'comment');
    commentTextArea.setAttribute('placeholder', 'Your comment');
    commentTextArea.id = 'comment-textarea';
    submitBtn.setAttribute('type', 'submit');
    submitBtn.id = 'submit-btn';

    // Creates text nodes
    const closeBtnText = document.createTextNode('X');
    const titleText = document.createTextNode(`${showData.name}`);
    const genresText = document.createTextNode(`Genre: ${showData.genres[0]}`);
    const premieredText = document.createTextNode(`Premiered: ${showData.premiered}`);
    const statusText = document.createTextNode(`Status: ${showData.status}`);
    const urlText = document.createTextNode('More information');
    const h2CommentsText = document.createTextNode(`Comments (n)`);
    const h2AddCommentText = document.createTextNode('Add a comment');
    const submitBtnText = document.createTextNode('Submit');

    // Appends text nodes to the elements
    closeBtn.appendChild(closeBtnText);
    title.appendChild(titleText);
    ulDetails.appendChild(genres);
    ulDetails.appendChild(premiered);
    ulDetails.appendChild(status);
    ulDetails.appendChild(url);
    genres.appendChild(genresText);
    premiered.appendChild(premieredText);
    status.appendChild(statusText);
    url.appendChild(urlText);
    h2Comments.appendChild(h2CommentsText);
    h2AddComment.appendChild(h2AddCommentText);
    submitBtn.appendChild(submitBtnText);

    // Appends elements to the modal
    commentsModal.appendChild(closeBtn);
    commentsModal.appendChild(img);
    commentsModal.appendChild(title);
    commentsModal.appendChild(ulDetails);
    commentsModal.appendChild(h2Comments);
    commentsModal.appendChild(ulComments);
    commentsModal.appendChild(h2AddComment);
    commentsModal.appendChild(form);
    form.appendChild(nameInput);
    form.appendChild(commentTextArea);
    form.appendChild(submitBtn);
    modalContainer.appendChild(commentsModal);

    // Appends modalContainer to the modalGenerator
    modalGenerator.appendChild(modalContainer);
  });
};

export default generateModal;

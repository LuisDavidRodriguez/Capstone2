const generateModal = () => {
    const modalContainer = document.querySelector('#modal-container');
    const commentsModal = document.createElement('div');
    commentsModal.classList.add('comments-modal');
    modalContainer.appendChild(commentsModal);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-modal');
    const closeBtnText = document.createTextNode('X');
    closeBtn.appendChild(closeBtnText);
    commentsModal.appendChild(closeBtn);

    const img = document.createElement('img');
    commentsModal.appendChild(img);

    const title = document.createElement('h1');
    const titleText = document.createTextNode('Title');
    title.appendChild(titleText);
    commentsModal.appendChild(title);

    const ulDetails = document.createElement('ul');
    ulDetails.classList.add('details');
    commentsModal.appendChild(ulDetails);

    const liDetail1 = document.createElement('li');
    ulDetails.appendChild(liDetail1);

    const liDetail2 = document.createElement('li');
    ulDetails.appendChild(liDetail2);

    const h2Comments = document.createElement('h2');
    const h2CommentsText = document.createTextNode(`Comments (n)`);
    h2Comments.appendChild(h2CommentsText);
    commentsModal.appendChild(h2Comments);


};

export default generateModal;

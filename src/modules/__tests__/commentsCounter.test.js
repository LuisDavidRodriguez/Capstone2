/**
 * @jest-environment jsdom
 */

import printComments from '../printComments.js';
import getComments from '../__mocks__/getShowCommentsMock.js'
import getShowData from '../getShowData.js';
import addComment from '../addComment.js';

/* eslint-disable*/
describe.only('Comments Counter Tests', () => {
  it('Tetches 5 comments', async () => {
    const comments = await getComments();
    expect(comments).toHaveLength(5);
  });

  it('Test 5 comments in the virtual DOM', async () => {
    document.body.innerHTML = 
    `<div id="modal-generator"></div>`;

    const parentContainer = document.getElementById('modal-generator');


  });
});

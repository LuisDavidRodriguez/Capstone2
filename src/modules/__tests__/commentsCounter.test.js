/**
 * @jest-environment jsdom
 */

import getComments from '../__mocks__/getCommentsMock.js';
import getShowData from '../__mocks__/getShowDataMock.js';
import generateModal from '../generateModal.js';

/* eslint-disable*/
describe.only('Comments Counter Tests', () => {
  it('Fetches 5 comments', async () => {
    const comments = await getComments();
    expect(comments).toHaveLength(5);
  });

  it('Test 5 comments in the virtual DOM', async () => {
    document.body.innerHTML = 
    `<div id="modal-generator"></div>`;
    // Generate modal based on mock show
    generateModal(1, getShowData, getComments);
    getComments(1).then((comments) => {
      expect(comments).toHaveLength(5);
    })
  });
});

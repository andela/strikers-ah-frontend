import axios from './axios';

const articleText = document.getElementById('articleBody').innerHTML;

const articleSlug = window.location.pathname.replace('/article/', '');
const articleUrl = window.location.href;
const popup = document.getElementsByClassName('highlight');
const commentBox = document.getElementsByClassName('comment-box-container');
const postContainer = document.getElementById('articleBody');

const fetchStorage = async fetch => {
  if (fetch === 'currentSelection') {
    return localStorage.getItem(fetch);
  }
  const result = await axios.get(`/api/articles/${articleSlug}/highlight`);
  return result.data;
};

const addInStorage = async (store, storeThis) => {
  if (store === 'currentSelection') {
    localStorage.setItem(store, JSON.stringify(storeThis));
  } else {
    const [data] = storeThis;
    await axios.post(`/api/articles/${articleSlug}/highlight`, data);
  }
};

const getSavedComments = async () => {
  const fetch = await fetchStorage('saved');
  if (fetch.length) {
    return fetch;
  }
  return JSON.parse('[]');
};

const showCommentContentBox = (comment, index) => {
  const commentCommentBox = document.getElementsByClassName(
    'comment-box-content-container',
  );
  const commentParagraph = document.querySelectorAll(
    'p.comment-box-content-container-text',
  );
  const deletecommentBtn = document.querySelectorAll('#deletecommentBtn');
  commentCommentBox[0].style.top = comment.positiontop;
  commentCommentBox[0].style.left = comment.positionleft;
  commentCommentBox[0].style.visibility = 'visible';
  commentParagraph[0].innerHTML = comment.comment;
  deletecommentBtn[0].setAttribute('data-delete', `${index}`);
};

const showComment = async thisComment => {
  const index = thisComment.getAttribute('data-index');
  const savedComments = await getSavedComments();
  const commentSelected = savedComments[index];
  await showCommentContentBox(commentSelected, index);
};

const allHighlighters = () => {
  const highlighter = document.getElementsByClassName('highlight-me');
  Array.from(highlighter).forEach(highlightMe => {
    highlightMe.onclick = () => {
      showComment(highlightMe);
    };
  });
};
const displayContent = async content => {
  let allContent = content;
  const savedComments = await getSavedComments();
  savedComments.forEach((commentData, index) => {
    const { text } = commentData;
    allContent = allContent.replace(
      text,
      `<span class="highlight-me" data-index="${index}">${text}</span>`,
    );
  });
  postContainer.innerHTML = allContent;
  allHighlighters();
};

const hideCommentContentBox = () => {
  const commentCommentBox = document.getElementsByClassName(
    'comment-box-content-container',
  );
  commentCommentBox[0].style.visibility = 'hidden';
};

const getCurrentSelection = async () => {
  const currentData = await fetchStorage('currentSelection');
  return JSON.parse(currentData);
};

const hideCommentBox = () => {
  commentBox[0].style.visibility = 'hidden';
};

const copyStringToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = { position: 'absolute', left: '-9999px' };
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const deleteComment = async () => {
  const deletecommentBtn = document.getElementById('deletecommentBtn');
  const index = deletecommentBtn.getAttribute('data-delete');
  const savedComments = await getSavedComments();
  const { id } = savedComments[index];
  await axios.delete(`/api/articles/${articleSlug}/highlight/${id}`);
  hideCommentContentBox();
  displayContent(articleText);
};

const commentHighlight = async () => {
  const currentData = await getCurrentSelection();
  commentBox[0].style.top = currentData.position.top;
  commentBox[0].style.left = currentData.position.left;
  popup[0].style.visibility = 'hidden';
  commentBox[0].style.visibility = 'visible';
};

const tweetMe = async () => {
  const { text } = await getCurrentSelection();
  window.open(
    `https://twitter.com/intent/tweet?text=${text} - ${articleUrl}`,
    'mywindow',
  );
  popup[0].style.visibility = 'hidden';
};

const fbShareMe = async () => {
  const { text } = await getCurrentSelection();
  window.open(
    `https://facebook.com/sharer/sharer.php?quote=${text}&u=${articleUrl}`,
    'mywindow',
  );
  popup[0].style.visibility = 'hidden';
};

const copyMeToClipboard = async () => {
  const { text } = await getCurrentSelection();
  copyStringToClipboard(text);
  popup[0].style.visibility = 'hidden';
};

const addComment = async () => {
  const comment = document.getElementById('comment');
  const currentData = await getCurrentSelection();
  const saveThis = [
    {
      comment: comment.value,
      text: currentData.text,
      positiontop: currentData.position.top,
      positionleft: currentData.position.left,
    },
  ];
  await addInStorage('saved', saveThis);
  comment.value = '';
  await hideCommentBox();
  await displayContent(articleText);
};

const getSelectedText = () => {
  let text = '';
  let selection;
  if (window.getSelection) {
    selection = window.getSelection();
    text = selection.toString();
  }
  return {
    text,
    selection,
  };
};

const getSelectionPosition = selection => {
  const range = selection.getRangeAt(0);
  // this.activeRange = range;

  const position = range.getBoundingClientRect();
  const topScroll = window.pageYOffset || document.documentElement.scrollTop;
  const leftScroll = window.pageXOffset || document.documentElement.scrollLeft;
  return {
    start: range.startOffset,
    end: range.endOffset,
    x: position.left + position.width / 2 + leftScroll - 62.5,
    y: position.top + topScroll - 60,
  };
};
postContainer.addEventListener('mouseup', () => {
  const { text, selection } = getSelectedText();
  const position = getSelectionPosition(selection);

  if (text !== '') {
    // Storing current selection
    commentBox[0].style.visibility = 'hidden';
    //
    const top = `${position.y}px`;
    const left = `${position.x}px`;

    addInStorage('currentSelection', {
      text,
      position: {
        top,
        left,
      },
    });
    popup[0].style.top = top;
    popup[0].style.left = left;
    popup[0].style.visibility = 'visible';
  } else {
    popup[0].style.top = '0px';
    popup[0].style.left = '0px';
    popup[0].style.visibility = 'hidden';
  }
});
displayContent(articleText);

// Listners
document
  .getElementsByClassName('twitter')[0]
  .addEventListener('click', tweetMe);
document
  .getElementsByClassName('facebook')[0]
  .addEventListener('click', fbShareMe);
document
  .getElementsByClassName('copyclipboard')[0]
  .addEventListener('click', copyMeToClipboard);
document
  .getElementsByClassName('comment')[0]
  .addEventListener('click', commentHighlight);
document
  .getElementsByClassName('cancelCommentBox')[0]
  .addEventListener('click', hideCommentContentBox);
document
  .getElementsByClassName('hideCommentBoxBtn')[0]
  .addEventListener('click', hideCommentBox);
document
  .getElementsByClassName('addCommentBtn')[0]
  .addEventListener('click', addComment);
document
  .getElementById('deletecommentBtn')
  .addEventListener('click', deleteComment);
// End Listeners

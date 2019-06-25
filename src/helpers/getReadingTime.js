import wordCount from 'word-count';
import striptags from 'striptags';

const readingTime = body => {
  const newBody = striptags(body);
  const time = Math.ceil(wordCount(newBody) / 265);
  return time;
};

export default readingTime;

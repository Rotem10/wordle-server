import words from './db';

export const getWord = () => {
  const word = words[Math.floor(Math.random() * words.length)];
  return word;
};

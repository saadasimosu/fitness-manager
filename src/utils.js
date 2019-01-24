export const capitalize = str => {
  let wordArray = str.split(' ');
  wordArray.forEach((word, i) => {
    wordArray[i] = word[0].toUpperCase() + word.slice(1);
  });

  return wordArray.join(' ');
};
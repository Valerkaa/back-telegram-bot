export const generateRandomLetters = (length) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const getRandomInt = (max: number, min = 1) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

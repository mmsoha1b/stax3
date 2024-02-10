export const snakeToCapitalized = (str) => {
  const words = str.split("_");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const result = capitalizedWords.join(" ");

  return result;
};

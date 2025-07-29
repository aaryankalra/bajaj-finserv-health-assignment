export const processData = (data) => {
  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;

  const lettersForConcat = [];

  data.forEach((item) => {
    if (/^[0-9]+$/.test(item)) {
      const num = parseInt(item);
      sum += num;
      num % 2 === 0 ? even_numbers.push(item) : odd_numbers.push(item);
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      lettersForConcat.push(...item);
    } else {
      special_characters.push(item);
    }
  });

  const concat_string = reverseAndAlternateCaps(lettersForConcat);

  return {
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string,
  };
};

export const reverseAndAlternateCaps = (letters) => {
  const reversed = letters.reverse().join("");
  let result = "";
  for (let i = 0; i < reversed.length; i++) {
    result +=
      i % 2 === 0 ? reversed[i].toUpperCase() : reversed[i].toLowerCase();
  }
  return result;
};

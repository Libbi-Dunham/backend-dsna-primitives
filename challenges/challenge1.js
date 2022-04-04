function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

function oddishOrEvenish(num) {
  const sumDigits = num.toString().split("");
  const add = sumDigits.map((n) => +n).reduce((a, b) => a + b);
  if (add % 2 === 0) {
    return "evenish";
  } else {
    return "oddish";
  }
}

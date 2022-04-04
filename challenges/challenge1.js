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

function fizzBuzz(number) {
  const list = [];
  for (let i = 1; i <= number; i++) {
    let result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    list.push(result || i);
  }
  return list;
}

function uniqueString(strings) {}

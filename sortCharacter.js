const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input one line of words (S) : ", (params) => {
  sortChar(params);
  rl.close();
});

const sortChar = (params) => {
  const vowels = [];
  const consonants = [];
  const vowelsArr = ["a", "i", "u", "e", "o"];
  const letters = params.toLowerCase().split(" ").join("").split("");
  letters.forEach((i) => {
    vowelsArr.includes(i) ? vowels.push(i) : consonants.push(i);
  });
  vowels.sort((a, b) => (a < b ? -1 : 1));
  console.log(`Vowels: ${vowels.join(",")}`);
  console.log(`Consonants: ${consonants.join(",")}`);
};

// sortFunc(words);
// sortFunc(words2);

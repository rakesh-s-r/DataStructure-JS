const canConstruct = (target, wordBank) => {
  if (target === "") return true;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const remainString = target.slice(word.length);
      if (canConstruct(remainString, wordBank) === true) {
        return true;
      }
    }
  }
  return false;
};

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(
//   canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );

const countConstruct = (target, wordBank) => {
  if (target === "") return 1;
  let total = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const remainString = target.slice(word.length);
      total += countConstruct(remainString, wordBank);
    }
  }
  return total;
};
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);

const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];
  let result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const remainString = target.slice(word.length);
      const res = allConstruct(remainString, wordBank);
      const subArray = res.map((way) => [word, ...way]);
      result.push(...subArray);
    }
  }
  return result;
};
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);

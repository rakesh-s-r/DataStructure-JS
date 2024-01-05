// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

var maxVowels = function (s, k) {
  let maxO = 0;
  let a = ["a", "e", "i", "o", "u"];
  let ws = "";
  let j = 0;
  let vowelsCount = 0;

  for (let i = 0; i < s.length; i++) {
    ws = ws + s[i];
    if (a.includes(s[i])) vowelsCount++;
    if (i - j + 1 == k) {
      maxO = Math.max(maxO, vowelsCount);
      ws = ws.slice(1);
      if (a.includes(s[j])) vowelsCount--;
      j++;
    }
  }
  return maxO;
};

console.log(maxVowels("abciiidef", 3));

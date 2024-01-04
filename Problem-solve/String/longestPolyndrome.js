// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

var longestPalindrome = function (s) {
  var expand = function (l, r, s) {
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      l--;
      r++;
    }
    return s.slice(l + 1, r);
  };

  let max = "";
  for (let i = 0; i < s.length; i++) {
    const res1 = expand(i, i, s);
    if (max.length < res1.length) {
      max = res1;
    }
    const res2 = expand(i, i + 1, s);
    if (max.length < res2.length) {
      max = res2;
    }
  }
  return max;
};

console.log(longestPalindrome("cbbd"));

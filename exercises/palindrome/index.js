// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*(function palindrome(str) {
    const strReverse = str.split('').reduce((reversed, character) => character + reversed);

   return str === strReverse;
}*/

function palindrome(str) {
  const array = str.split("");

  return array.every(
    (element, index) => element === str[str.length - index - 1]
  );
}

module.exports = palindrome;

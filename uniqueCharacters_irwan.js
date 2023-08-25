/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
  // declare empty object
  let obj = {};

  // find each alphabet using for loop
  for (let i = 0; i < str.length; i++) {
    let index = str[i];

    if (obj[index]) {
      return false;
    }

    obj[index] = true;
  }
  return (obj = true);
}

console.log(hasUniqueCharacters('abcde')); // Output: true
console.log(hasUniqueCharacters('hello')); // Output: false

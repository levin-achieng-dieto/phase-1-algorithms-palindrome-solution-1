function isPalindrome(word) {
  //'abc' => 'cba'
  const splitword = word.split('')
  const reverseword = splitword.reverse()
  const joinword = reverseword.join('')

  if(word === joinword){
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here
  gets the string
  reverse the string
  join the string
  if the input is equal to input reverse,
  return true, else return false

*/

/*
  Add written explanation of your solution here
  create a function that will return true if the is palindrome
  and returns false if the word is not palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("levin"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eve"));
}

module.exports = isPalindrome;

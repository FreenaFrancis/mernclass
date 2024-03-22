function isPalindrome(str) { 
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
  }
  
  // Test cases
  console.log(isPalindrome("racecar"));  // true
  console.log(isPalindrome("hello"));    // false
  console.log(isPalindrome("A man, a plan, a canal, Panama"));  // true
  console.log(isPalindrome("Malayalam"));
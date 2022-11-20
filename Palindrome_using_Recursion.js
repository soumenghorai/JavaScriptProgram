/*
Check Palindrome in a String using recursion 

Problem Statement
Given a string, write a recursive function that checks if the given string is a palindrome or not a palindrome.
Example 1:
Input : malayalam
Output : Yes

Reverse of malayalam is also malayalam.
Example 2:
Input : max
Output : No
Reverse of max is not max.
*/

function isPal(str) {
    if(str.length <= 1) {
        return true;
    }
    let lastIndex = str.length-1;
    if(str[0] != str[lastIndex]) {
        return false;
    }
    return isPal(str.slice(1, lastIndex));
}
console.log(isPal("MALAYALAM"));

/*
function isPalindromeRecursion( str , s , e) {
    // If there is only one character
    if (s == e)
      return true;
  
    // If first and last
    // characters do not match
    if ((str.charAt(s)) != (str.charAt(e)))
      return false;
  
    // If there are more than
    // two characters, check if
    // middle substring is also
    // palindrome or not.
    if (s < e + 1)
      return isPalRec(str, s + 1, e - 1);
  
    return true;
  }
  
  function isPalindrome( str) {
    var n = str.length;
  
    // An empty string is
    // considered as palindrome
    if (n == 0)
      return true;
  
    return isPalindromeRecursion(str, 0, n - 1);
  }
  
  
  var str = "racecar";
  
  if (isPalindrome(str))
    console.log("Yes");
  else
    console.log("No");
    */
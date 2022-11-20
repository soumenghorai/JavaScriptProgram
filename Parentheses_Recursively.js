/*
Generate Parentheses Recursively 
Problem statement 
You are given a ‘n’ pair of parentheses, write a function to generate all combinations of well-formed parentheses
If you are given n = 3, this means we need to generate well formed valid parentheses using 3 open brackets 3 
close brackets 
Then you have to return the combinations of all from parentheses, Below we have total 5 combinations of 
parentheses that we can generate when you have n = 3 
[ “((()))”,
 “(()())”,
 “(())()”,
 “()(())”,
 “()()()” ]

• If you have n = 2, then we have to return the combinations of all parentheses
[ “(())”,
 “()()” ]
• For n = 1, 
 [ “()” ]
*/

function jarvis(n, str, o, c, result) {
    if(str.length == n*2) {
        result.push(str);
        return;
    }
    if(o == 0) {
        str = str + "(";
        jarvis(n, str, o+1, c, result);
        return result;
    } else if(o == n) {
        str = str + ")";
        jarvis(n, str, o, c+1, result);
    } else {
        jarvis(n, str + "(", o+1, c, result);
        if(o != c)
            jarvis(n, str + ")", o, c+1, result);
    }
    
    
}

jarvis(3, "", 0, 0, [])
console.log(jarvis(3, "", 0, 0, []));

// var generateParanthesis = function (n) {
//     let res = []; // To store the result
//     let str = ""; // To store our string which is empty
//     let open = 0; // To store count of open ‘(‘
//     let close = 0; // To store count to close ‘)’
//     backtrack(res, str, open, close, n); // Call the backtracking function
//     console.log("result", res);
//     return res; // return the result
//   };
  
//   function backtrack(res, str, open, close, n) {
//     if (str.length === n * 2) {
//       //terminating condition
//       res.push(str);
//       return;
//     }
//     if (open < n) {
//       backtrack(res, str + "”(“", open + 1, close, n); // add “(“ to current string
//       // and recursively call function
//     }
//     if (close < open) {
//       backtrack(res, str + "”)”", close, open + 1, n); // add “)” to current string
//       // and recursively call function
//     }
//   }
//   console.log(generateParanthesis(3));
  
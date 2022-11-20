/*
Lexicographical Printing Recursively 
Problem Statement:
Given a number N, the task is to print all the numbers from 1 to N in lexicographical order.
Lexicographical order means that we are ordering by the digits with the leftmost digit giving highest priority 
Input N = 14
Output: 1 10 11 12 13 14 2 3 4 5 6 7 8 9 
Input: N = 19
Output: 1 10 11 12 13 14 15 16 17 18 19 2 3 4 5 6 7 8 9 
Input N= 15
Output: 1 10 11 12 13 14 15 2 3 4 5 6 7 8 9
When there is no character then, 1st the family of 1 
(1, 10, 100, 1000, 10000, .... 11, 110, 1100, ...., 12, ..., 19, 190,1900, ...,1999…) 
will be printed less than N,
Next the family of 2(2, 20, 200, 2000, ..., 21, 210, 2100, …, 22, ..., 29, 290, 2900, ..., 2999) will be printed less than 
N and so on till 9. 
*/
// First Approach

function findLexicographic(n) {
    let sol = [];
    lexNumbers(1, n, sol) ;
    return sol;
}

function lexNumbers(temp, n, sol) {
    if(temp >n)
        return;
    sol.push(temp);
    lexNumbers(temp*10, n, sol);
    if(temp % 10 !== 9)
        lexNumbers(temp+1, n, sol);
}
findLexicographic(15);
console.log(findLexicographic(15));

// Second Approach

// function lexNumbers(n)
// {
//     var sol = [];
//     dfs(1, n, sol);
//     console.log("["+ sol[0]);
//     for (var i = 1; i < sol.length; i++)
//        console.log(", "+ sol[i]);
//     console.log("]");
// }
 
// function dfs(temp, n, sol)
// {
//     if (temp > n)
//         return;
//     sol.push(temp);
//     dfs(temp * 10, n, sol);
//     if (temp % 10 != 9)
//         dfs(temp + 1, n, sol);
// }
 
// var n = 15;
// lexNumbers(n);
 

// 1st Approach

// function fib(n){
//     if(n == 0 || n == 1) return n;
//     return fib(n-1) + fib(n-2);
// }
// console.log(fib(10));

// 2nd Approach

// function fib(n) {
//     if(n < 2) {
//         return n;
//     }
//     let n0 = 0;
//     let n1 = 1;
//     let n2;

//     for(let i = 2; i<=n; i++) {
//         n2 = n0+n1;
//         n0 = n1;
//         n1 = n2;
//     }
//     return n2;
// }
// console.log(fib(50));

/*
Fibonacci Sequence using Recursion 

Problem Statement:
Write a Fibonacci sequence of nth term using recursion.
Example 1: 
Input: 7
Output: 0 1 1 2 3 5 8
Example 2: 
Input: 10
Output: 0 1 1 2 3 5 8 13 21 34

What is a Fibonacci sequence?
0, 1, 1, 2, 3, 5, 8, 13, 21, ...

The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is 
defined as the sum of the previous two terms. Hence, the nth term is the sum of (n-1)th term and (n-2)th term.
*/
function displayFibonnaci(n) {
    if(n <=0) {
        console.log('Enter a positive integer.');
    }
    else {
        for(let i = 0; i < n; i++) {
            console.log(fibonacci(i));
        }
    }
  
    //inner function to calculate next fibonacci sequence using recursion
    function fibonacci(num) {
        if(num < 2) {
            return num;
        }
        else {
            return fibonacci(num-1) + fibonacci(num - 2);
        }
    }
  }
  
  let n = 20;
  displayFibonnaci(n);

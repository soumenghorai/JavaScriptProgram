/*
Sum triangle from array 
Problem Statement
Given an array of integers, print a sum triangle from it such that the first level has all array elements. From then, at each level number of elements is one 
less than the previous level and elements at the level is be the Sum of consecutive two elements in the previous level.
Example:
Input: A = {1, 2, 3, 4, 5}
Output: [48]
 [20, 28] 
 [8, 12, 16] 
 [3, 5, 7, 9] 
 [1, 2, 3, 4, 5] 

 Explanation:
Here, 
 [48]
 [20, 28] --> (20 + 28 = 48)
 [8, 12, 16] --> (8 + 12 = 20, 12 + 16 = 28)
 [3, 5, 7, 9] --> (3 + 5 = 8, 5 + 7 = 12, 7 + 9 = 16)
 [1, 2, 3, 4, 5] --> (1 + 2 = 3, 2 + 3 = 5, 3 + 4 = 7, 4 + 5 = 9)

 Understanding the algorithm

Let us first understand the algorithm to write the code: 
1. At each iteration create a new array which contains the Sum of consecutive elements in the array passes as 
parameter.
2. Make a recursive call and pass the newly created array in the previous step.
3. While back tracking, print the array (to get smaller array printed first).
 */

function sum(arr) {
    if(arr.length == 1) {
        return;
    }
    let newArr = [];
    for(let i =0; i<arr.length-1; i++) {
        newArr.push(arr[i] + arr[i+1]);
    }
    
    sum(newArr);
    
    console.log(newArr);
}
let arr = [1,2,3,4,5];
console.log(sum(arr));
// function printTriangle(A,  n)
// {
//   // Base case
//   if (n < 1)
//     return;

//   // Creating new array which contains the
//   // Sum of consecutive elements of the prev array
//   // then the new array is passed as a parameter.
//   let temp = new Array(n - 1);
//   for (let i = 0; i < n - 1; i++)
//   {
//     let x = A[i] + A[i + 1];
//     temp[i] = x;
//   }

//   // Make a recursive call and pass
//   // the newly created array
//   printTriangle(temp, n - 1);

//   // Print current array in the end so
//   // that smaller arrays are printed first
//   for (let i = 0; i < n ; i++)
//   {
//     if(i == n - 1)
//       console.log( A[i]  + " ");
//     else
//       console.log( A[i]  + ", ");
//   }

//   console.log("<br>");
// }

// let A = [ 1, 2, 3, 4, 5 ];
// let n = A.length;
// printTriangle(A,n);
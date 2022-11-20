/*
Subsequences Recursively

Problem Statement:
Let’s take an input array, the array is an integer array 
int arr[ ] = {1,2,3,4,5,6,7,8,9,10}; (sorted array)
SubSequence: May not be contiguous but maintain the relative order.
Elements in the subsequence appear in the same order as in the original array; the only difference from the sub 
array is that they may not be contiguous. 
For example: 
Consider original array as {1,2,3,4,5,6,7,8,9,10},
• {4,5,6,7} is a subarray and a subsequence of the original array 
• {4,6,7} is not the subarray but is a subsequence of the original array (because 4,6,7 they 
• appear in the same order as they appear in the original array)
• {1,9,10} is not the subarray but a subsequence of the original array because 1, 9, 10 their relative order is the same in 
the original array 
• {5,4} is not the subarray nor a subsequence because the relative order of 5 and 4 is different in the original array
• {1,4,7,3} is not the subarray nor a subsequence because the order is maintained only up till 1,4,7 only. 
Note: All subarrays are subsequences but all subsequences are not subarray.

For an array of ‘n’ elements, 
Total number of subsequences: 2^n (Including empty array)
Non-empty subsequence 2^n - 1
If we consider [1,3]: 1 is coming before 3 in a subsequence 
also 1 will come before 3 
A subsequence is not like a permutation where we are 
arranging the elements. It is more like we may either add the 
element or not add an element. 
And this is where we'll draw the logic from
First, we should start with the first element of the array; when we are at the first element of the array, the current 
index is 0. So, when the current index is 0, we have two choices either to include the current index or to exclude 
the current index (element at the current index) 
Then move to the next index, and apply this for every element in the array till we reach the last index.
The recursion tree for the array [1,2,3] is below
Now, print the subsequence once the last index is reached. 
Output: [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]
*/

// function printSubSeq(bag, i, arr) {

//     if(i == arr.length) {
//         console.log(bag);
//         return;
//     }
    
//     bag.push(arr[i]);
//     printSubSeq(bag, i+1, arr);
//     bag.pop();
//     printSubSeq(bag, i+1, arr);
// }
// let bag = [1,2,3];
// let arr = new Array();
// console.log(printSubSeq(bag, 0, arr));

function printSubsequences(array, index, result) {
    if (index === array.length) {
      if (result.length > 0) console.log(`[${result}]<br>`);
    } else {
      printSubsequences(array, index + 1, result);
      result.push(array[index]);
      printSubsequences(array, index + 1, result);
      result.pop();
    }
    return;
  }
  
  let array = [1, 2, 3];
  
  let result = new Array();
  
  printSubsequences(array, 0, result);
  
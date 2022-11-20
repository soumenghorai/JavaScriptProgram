// Given an array of length N, where every element is present twice and only one element is present
// once. Find the unique element

// Sample input: N = 5, Array = [3,2,1,2,3]
// Sample output: 1

let nums = [1,2,3,4,5,2,3,4,1];
let result = 0;

for(let num of nums) {
    result = result ^ num;
}
console.log(result);
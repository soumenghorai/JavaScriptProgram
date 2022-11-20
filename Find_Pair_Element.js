// Find the pair of elements in a given array A such that the sum of the pair is equal to N
// Input: A = [10, 20, 10, 40, 50 , 70], N=50
// Output: 2,3




let nums = [5,10,4,20,15];

// for(let i = 0; i<nums.length-1; i++) {
//     for(let j = i+1; j<nums.length; j++) {
//         if(nums[i] + nums[j] == 19) {
//             console.log(i + " " + j);
//         }
//     }
// }

let map = {};
let target = 14;
for(let i = 0; i<nums.length; i++) {
    if(map[target - nums[i]]) {
        console.log(map[target - nums[i]] + " " + i);
    } else {
        map[nums[i]] = i;
    }
}
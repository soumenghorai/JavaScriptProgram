let twoSum = function(nums, target) {
    let map = {};
   
   for(let i = 0; i<nums.length; i++) {
       let reqTarget = target - nums[i];
       if(map[reqTarget] != undefined) {
           return [map[reqTarget], i];
       }
       map[nums[i]] = i; 
   }
};
let nums = [2,7,11,15];
let target = 9;
console.log(twoSum(nums, target));
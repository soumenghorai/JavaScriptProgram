// function isSorted(arr) {

//     function helper(arr, i) {
//         if(i == arr.length) {
//             return true;
//         }
//         if(arr[i] > arr[i+1]) {
//             return false;
//         }
//         return helper(arr, i+1);
//     }

//     return helper(arr, 0);
    
// }
// let arr = [1,2,3,4,,5];
// console.log(isSorted(arr));


function isSorted(arr, i){
    if(i == arr.length-1) return true;
    let value = isSorted(arr, i+1);
    return value && (arr[i] <= arr[i+1]);

}
let arr = [1,2,3,4,5];
console.log(isSorted(arr, 0));

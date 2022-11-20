function mergeSort(arr) {
    if(arr.length == 1) {
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));// [8]
    let right = mergeSort(arr.slice(mid));  //[7]
    return merge(left, right); // [7,8]
}

function merge(arr1, arr2) {
    let result = [];

    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}
let arr = [4,2,9,8,7,6];
console.log(mergeSort(arr));



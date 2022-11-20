function median(arr1, arr2) {
    let result = [];

    let i = 0;
    let j = 0;

    while(i<arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }

    while(i<arr1.length) {
        result.push(arr1[i++]);
    }

    while(j<arr2.length) {
        result.push(arr2[j++]);
    }
    let length = result.length;

    if(length % 2 == 0 ) {
        let mid2 = length/2;
        let mid1 = mid2-1;
        return (result[mid1] + result[mid2])/2;
    } else {
        let mid = Math.floor(length/2);
        return result[mid];
    }
}
let arr1 = [1,5,8];
let arr2 = [2,4,9];
console.log(median(arr1,arr2));
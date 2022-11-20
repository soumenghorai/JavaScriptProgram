function binarySearch(arr, key){
    
    let start = 0;
    let end = arr.length-1;

    while(start<=end){
        let mid = Math.floor((start+end)/2);

        if(arr[mid] === key){
            // found the key
            return mid;
        }
        else if(arr[mid] < key){
            // continue searching to the right
            start = mid+1;
        }
        else{
            // search searching to the left
            end = mid-1;
        }
    }
    // key wasn't found
    return false;
}
let arr = [1,3,5,7,9];
let key = 7;
console.log(binarySearch(arr,key));
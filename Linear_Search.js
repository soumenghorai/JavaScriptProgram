/*
function linearSearch(arr, key){

// Go through all the elements of arr to look for item.
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){    // Found it!
            return i;
        }
    }
     // Item not found in the array.
    return false;
}
let arr = [7, 16, 4, 9, 13, 2, 8];
let key = 13;
console.log(linearSearch(arr, key));
*/
function linearSearch(arr, key){
    let results = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            results.push(i)
        }
    }
    // If results array is empty, return -1
    if(!results){
        return -1
    }

    return results
}
let arr = [7, 16, 4, 9, 13, 2, 8];
let key = 13;
console.log(linearSearch(arr, key));

function bubbleSort(arr) {

    
    for(let i = 0; i<arr.length-1; i++) {
        // Last i elements are already in place
        for(let j = 0; j<arr.length-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    
}
let arr = [4,2,6,8,9];
bubbleSort(arr);
console.log(arr);
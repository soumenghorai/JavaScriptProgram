function selectionSort(arr){
    for(let i = 0; i<arr.length-1; i++){
        // Finding the smallest number in the subarray
        let smallest = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[smallest]){
                smallest = j;
            }
        }
        if(smallest != i){
        // let temp = arr[i];
        // arr[i] = arr[smallest];
        // arr[smallest] = temp;
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        } 

    }
    return arr;
}
let arr = [4,2,6,8,9];
selectionSort(arr);
console.log(arr);
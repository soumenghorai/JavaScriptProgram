function insertionSort(arr) {
    for(let i = 1; i<arr.length; i++) {
        let temp = arr[i];
        
        let j = i-1;

        while(j>=0 && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}

let arr = [37, 25,22, 24, 26];
insertionSort(arr);
console.log(arr);
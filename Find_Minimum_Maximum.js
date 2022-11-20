// Problem – Given an array of numbers. Your task is to find the minimum and maximum element. For example –
// Input – [2,3,15,6]
// Output – 
// Minimum element - 1
// Maximum element - 15
// Approach – We can use linear search technique in this. 
// Steps - 
// 1) Initialize min and max to minimum and maximum of first 2 elements
// 2) Iterate through array from index 3rd and update min and max respectively after comparison
// 3)

// First example
// let arr = [8,3,4,2,6,1,7,10];
// arr.sort((a,b) => a-b);
// console.log(arr);
// console.log("Max is", arr[arr.length-1]);
// console.log("Min is", arr[0]);

// Second example
// let arr = [8,3,4,2,6,1,7,10];
// let min, max;
// if(arr[0] > arr[1]) {
//     max = arr[0];
//     min = arr[1];
// } else {
//     max = arr[1];
//     min = arr[0];
// }
// for(let i = 2; i<arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i];
//     } else if(arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log("Max is", max);
// console.log("Min is", min);

// Third example
function getMinMax(arr, n)
	{
		minmax = new Array();
		var i;
		var min;
		var max;

		
		if (n == 1) {
			minmax.max = arr[0];
			minmax.min = arr[0];
			return minmax;
		}

		if (arr[0] > arr[1]) {
			minmax.max = arr[0];
			minmax.min = arr[1];
		} else {
			minmax.max = arr[1];
			minmax.min = arr[0];
		}

		for (i = 2; i < n; i++) {
			if (arr[i] > minmax.max) {
				minmax.max = arr[i];
			} else if (arr[i] < minmax.min) {
				minmax.min = arr[i];
			}
		}

		return minmax;
	}
		var arr = [10, 121, 345, 12, 130, 300];
		var arr_size = 6;
		minmax = getMinMax(arr, arr_size);
		console.log("Minimum element is " ,minmax.min);
		console.log("Maximum element is " , minmax.max);


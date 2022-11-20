// Reverse Array
// Problem – Given an array of numbers. You need to reverse the array. For example – 
// Input – [1,2,3,4,5]
// Output – [5,4,3,2,1]
// Approach 1 – We can use swapping operation to get the desired output. Let’s see each step –
// 1) Initilaize two pointers - start=0, end = n-1 where n = number of elements in array
// 2) Swap elements present at start and end
// 3) Start = start+1, end = end -1
// 4) Repeat step1 till start <= end


function reverseArray( arr, start,  end)
{
    var temp;
    
    while (start < end)
    {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start = start + 1;
        end = end - 1;
    }
}	

function printArray( arr,size)
{
    for ( i = 0; i < size; i++)
        console.log(arr[i] + " ");
    
}
    arr  = [1, 2, 3, 4, 5, 6];
    printArray(arr, 6);
    reverseArray(arr, 0, 5);
    console.log("Reversed array is - ");
    printArray(arr, 6);

//     Reverse Array
// Approach 2 – We can use recursion to get the desired output. Let’s see each step –
// 1) Initilaize two pointers - start=0, end = n-1 where n = number of elements 
// in array
// 2) Swap elements present at start and end
// 3) Recursively call reverseArray function


// function reverseArray( arr, start,  end)
// {
//       var temp;
//     if (start >= end)
//         return;
//     temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     reverseArray(arr, start+1, end-1);
// }	

// function printArray( arr,size)
// {
//     for ( i = 0; i < size; i++)
//         console.log(arr[i] + " ");
    
// }
//     arr  = [1, 2, 3, 4, 5, 6];
//     printArray(arr, 6);
//     reverseArray(arr, 0, 5);
//     console.log("Reversed array is - ");
//     printArray(arr, 6);
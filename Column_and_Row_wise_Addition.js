/*
Given a 2D array of size MxN, you need to display N integers which
denotes the column wise addition of the 2D array
Input:
M=4,N=3

Output:
12,15,15
Explanation:
Sum of column-1 : 3+3+2+4= 12
Sum of column-2 : 4+4+3+4 = 15
Sum of column-3 : 2+3+4+4 = 15
*/

// Column Wise
function isDiagonalMat(mat) {
    let result = [];
    
    for(let i =0; i<mat[0].length; i++) {
        let sum = 0;
        for(let j = 0; j <mat.length;j++) {
            sum = sum + mat[j][i];
        }
        result.push(sum);
    }
    return result;
}


let mat = [
    [4,0,0],
    [2,1,0],
    [6,0,0]
    
];

console.log(isDiagonalMat(mat));

// Row Wise
// function isDiagonalMat(mat) {
//     let result = [];
    
//     for(let i =0; i<mat[0].length; i++) {
//         let sum = 0;
//         for(let j = 0; j <mat.length;j++) {
//             sum = sum + mat[j][i];
//         }
//         result.push(sum);
//     }
//     return result;
// }


// let mat = [
//     [4,0,0],
//     [2,1,0],
//     [6,0,0]
    
// ];

// console.log(isDiagonalMat(mat));
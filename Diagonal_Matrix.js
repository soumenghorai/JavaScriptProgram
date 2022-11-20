/*
Given a 2D array A, return a boolean value indicating that the given
matrix is a diagonal matrix or not. A matrix is said to be diagonal if all
the elements of the array other then the diagonal is 0
If there will be zero in the diagonal then also, we will print output as
true if all remaining cells have zero. Having zeros in diagonal does not
affect our output

Input:
A=[ [1,0,0,0],
[0,2,0,0],
[0,0,3,0],
[0,0,0,4] ]

Output:
true

Explanation:
Since all the elements of the array other then the diagonal element are
0, it can be considered as a diagonal matrix
*/

function isDiagonalMat(mat) {
    for(let i =0; i<mat.length; i++) {
        for(let j = 0; j <mat[i].length;j++) {
            if(i!=j && mat[i][j]!=0) {
                return false;
            }
        }
    }
    return true;
}


let mat = [
    [1,0,0],
    [0,2,0],
    [0,0,3]
    
];

console.log(isDiagonalMat(mat));
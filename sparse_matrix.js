function printSpiralMatrix(matrix, r,c) {
    let top = 0;
    let down = r-1;
    let left = 0;
    let right = c-1;

    //0 =  ----->
    //1 = v
    //2 =  <-----
    //3 =  ^
    let dir = 0;

    while( top<=down) {
        //we are going left to right, top(row) is constant
        if(dir == 0) {
            for(let i = left; i<=right; i++) {
                console.log(matrix[top][i]);
            }
            top++;
        } else if(dir == 1) { //we are going top to down, right(col) is constant
            for(let i = top; i<=down; i++) {
                console.log(matrix[i][right]);
            }
            right--;
        } else if(dir == 2) {
            for(let i = right; i >= left; i--) {
                console.log(matrix[down][i]);
            }
            down--;
        } else if(dir == 3) {
            for(let i = down; i>=top; i--) {
                console.log(matrix[i][left]);
            }
            left++;
        }
        dir = (dir + 1) % 4; //reset to 0 after 3
    }
}


printSpiralMatrix(
    [
        [1, 2, 3, 4,],
        [5 , 6 , 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ],
    4,4
);

//expected output: 1 2 4 6 5 3
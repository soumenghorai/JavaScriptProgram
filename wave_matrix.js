function printWaveMatrix(matrix) {
    let r = matrix.length;
    let c = matrix[0].length;

    let dir = 0;

    for(let i = 0; i<c; i++) {

        if(dir == 0) {
            for(let j = 0; j < r; j++) {
                console.log(matrix[j][i]);
            }
        } else if(dir == 1) {
            for(let j = r-1; j >= 0; j--) {
                console.log(matrix[j][i]);
            }
        }
        dir = (dir+1)%2;
    }
}

printWaveMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
])
function printTranspose(matrix) {
    let r = matrix.length;
    let c = matrix[0].length;

    let dir = 0;
    let output = [];
    
    for(let i = 0; i<c; i++) {      
        output[i] = [];  
        for(let  j =0; j < r; j++) {
            output[i][j] = matrix[j][i];
        }
    }

    console.log(output);
}

printTranspose([
    [1,2],
    [4,5],
    [7,8]
])
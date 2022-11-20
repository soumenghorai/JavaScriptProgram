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

    
    for(let j = output[0].length-1; j>=0; j--) {
        let res = "";
        for(let i = 0; i<output.length; i++) {
           res = res + ' ' + output[i][j];
        }
        console.log(res);
    }

console.log(output);
}

printTranspose([
    [1,2],
    [4,5],
    [7,8],
]);
}

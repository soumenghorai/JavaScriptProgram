function printTranspose(matrix) {
    let r = matrix.length;
    let c = matrix[0].length;

    let dir = 0;

    for(let i = 0; i<r; i++) {
        let result = "";
        for(let  j =0; j < c; j++) {
            result+=matrix[j][i];
        }
        console.log(result);
    }
}

printTranspose([
    [1,2,3],
    [4,5,6],
    [7,8,9]
])
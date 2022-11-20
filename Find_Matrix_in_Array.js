let mat = [
    [2,14,15,16],
    [7,18,20,22],
    [8,21,23,24],
    [10,26,27,28]

    
];

function find(mat, x) {
    let rows = mat.length-1;
    let columns = mat[0].length-1;

        let i = 0;
        let  j = columns;
        while(i<=rows && j>=0) {
            if(mat[i][j] == x) {
                return true;
            }
            if(mat[i][j] > x) {
                j--;
            } else {
                i++;
            }
        }
    
    return false;
}
console.log(find(mat,15));

// Second Approach
/*
let mat = [
    [2,14,15,16],
    [7,18,20,22],
    [8,21,23,24],
    [10,26,27,28]

    
];

function find(mat, x) {
    let rows = mat.length-1;
    let columns = mat[0].length-1;

    let i =0;
    for(; i<=rows && mat[i][columns]<=x; i++);

    if(i<=rows) {
        // for(; i <= rows; i++) {
        //     for(let j = columns; j>=0; j--) {
        //         if(mat[i][j] == x) {
        //             return true;
        //         } else if(mat[i][j]<x) {
        //             break;
        //         }
        //     }
        // }
        let  j = columns;
        while(i<=rows && j>=0) {
            if(mat[i][j] == x) {
                return true;
            }
            if(mat[i][j] > x) {
                j--;
            } else {
                i++;
            }
        }
    }
    return false;
}
console.log(find(mat,15));
*/

// Thrid Approach
/*
let mat = [
    [2,14,15,16],
    [7,18,20,22],
    [8,21,23,24],
    [10,26,27,28]

    
];

function find(mat, x) {
    let rows = mat.length-1;
    let columns = mat[0].length-1;

    let i =0;
    for(; i<=rows && mat[i][columns]<=x; i++);

    if(i<=rows) {
        for(; i <= rows; i++) {
            for(let j = columns; j>=0; j--) {
                if(mat[i][j] == x) {
                    return true;
                } else if(mat[i][j]<x) {
                    break;
                }
            }
        }
    }
    return false;
}
console.log(find(mat,15));
*/
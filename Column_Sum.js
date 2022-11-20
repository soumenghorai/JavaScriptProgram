let nums = [
    [1,2,3],
    [4,5,6],
    [7,8,9]

    
];



let columnSum = nums.reduce((carry, row) =>{
    let result = [];
    for(let i = 0; i < carry.length; i++) {
        result[i] = carry[i] + row[i];
    }
    return result;
});

console.log(columnSum);
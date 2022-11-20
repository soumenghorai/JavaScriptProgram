let mat = [
    [2,14,15,18],
    [10,18,14,22],
    [8,21,22,15],
    [10,14,21,28]

    
];
function unique(mat){
let map = {};

for(let row of mat){
    for(let num of row){
        map[num] = (map[num] || 0) + 1;
    }
}
        for(let key in map) {
    if(map[key] == 1) {
        console.log(key);
    }
}
}
console.log(unique(mat));
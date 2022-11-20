function f(n){
    if(n == 0){
        // console.log(1);
        return;
    }
    f(n-1);
    console.log(n);
}
let n = 10;
console.log(f(n));

// function print1ToN(n) {

//     if(n == 0) {
//         return;
//     }

//     print1ToN(n-1);

//     console.log(n);
// }
// let n = 5;
// console.log(print1ToN(n));

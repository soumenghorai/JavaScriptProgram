function fact(n){
    if(n == 1) return 1;
    return n * fact(n -1);
}
console.log(fact(5));

// 2nd Approach
// function fact(n){
//     if(n == 0 || n == 1){
//       return 1;
//     }
//     else{
//       return n*fact(n-1);
//     }  
//   }
//   let n = 5;
//   console.log(fact(n));
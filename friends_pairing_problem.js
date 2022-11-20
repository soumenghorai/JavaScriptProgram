function f(n){
    if(n == 1 || n == 2) return n;
    return f(n-1) + (n-1) * f(n-2);
}
console.log(f(10));
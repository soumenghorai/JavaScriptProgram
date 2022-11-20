function lhs(a,b){
    return (a+b)*(a+b);
  }
  function rhs(a,b){
    return a*a+2*a*b+b*b;
  }
  let a = 9;
  let b = 3;
  if(lhs(a,b) == rhs(a,b)){
    console.log(lhs(a,b));
  }
function isInteger(a) {
  return !isNaN(a) && 
         parseInt(Number(a)) === a && 
         !isNaN(parseInt(a, 10));
}
isInteger(5);
isInteger(5.1);
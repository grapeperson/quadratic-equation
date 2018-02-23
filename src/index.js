module.exports = function solveEquation(equation) {
  function compare(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  let arr=equation.split(" ");
  let A=Number(arr[0]);
  let B=Number(arr[3]+arr[4]);
  let C=Number(arr[7]+arr[8]);
  let x1,x2;
  let result=[];
  let D = B*B-4*(A*C);
  x1=(-B+Math.sqrt(D))/(2*A);
  x2=(-B-Math.sqrt(D))/(2*A);
  result.push(Math.round(x1));
  result.push(Math.round(x2));
  let sortedResult = result.sort(compare);
  return sortedResult
}

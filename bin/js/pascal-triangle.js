
function pascalTriangle(n) {
  let output = [];
  for(i=0;i<n;i++) {
    let c = 1;
    for(k=0;k<i+1;k++) {
      output.push(c);
      c = c * (i-k)/(k+1);
    }
    output.push("\n");
  }
  return output;
}

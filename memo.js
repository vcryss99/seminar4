function power(base, exponent, memo = {}) {
  const key = `${base}^${exponent}`;
  
 
  if (memo[key] !== undefined) {
    console.log(`Memoizat: ${key} = ${memo[key]}`);
    return memo[key];
  }

  
  if (exponent === 0) {
    memo[key] = 1;
    return 1;
  }

  
  const halfExp = Math.floor(exponent / 2);
  const halfPower = power(base, halfExp, memo);
  let result;

  if (exponent % 2 === 0) {
    result = halfPower * halfPower;
  } else {
    result = base * halfPower * halfPower;
  }

  
  memo[key] = result;
  console.log(`Calculat: ${key} = ${result}`);
  return result;
}


console.log(power(2, 10)); 
console.log(power(3, 5));  

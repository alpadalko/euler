function Euler12() {
  let triangularNumber = 0;
  let i = 1;
  while (true) {
    triangularNumber += i;
    let divisors = getNumber(triangularNumber);
    if (divisors > 500) {
      return triangularNumber;
    }
    i++;
  }
}
function getNumber(number) {
  let divisors = 0;
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      divisors += 2;
    }
  }
  console.log(divisors);
  return divisors;
}

getNumber()
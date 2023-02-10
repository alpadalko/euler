function Euler12() {
  let a = 0;
  let i = 1;
  while (true) {
    a += i;
    let divisors = getNumber(a);
    if (divisors > 500) {
      return a;
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
  return divisors;
}

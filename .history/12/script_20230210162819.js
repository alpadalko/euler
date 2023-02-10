function Euler12() {
  let a = 0;
  let i = 1;
  while (true) {
    a += i;
    let b = getNumber(a);
    if (b > 500) {
      return a;
    }
    i++;
    console.log(i);
  }
}
function getNumber(number) {
  let b = 0;
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      b += 2;
    }
  }
  return b;
}

Euler12();
  function Euler() {
    console.time("TIME")
    let a = 1;
    let b = 2;
    let c = Math.sqrt(a*a + b*b);
    let sum = 0;
    while(sum != 1000){
        if(sum > 1000){
            a++;
            b = a+1;
        } else {
            b++;
        }
        c = Math.sqrt(a*a + b*b);
        sum = a + b + c;
    }
    console.timeEnd("TIME")
  }

  Euler();
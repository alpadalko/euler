  function Euler() {
    console.time("TIME")
    let a = 1;
    let b = 2;
    let sum = 0;
    // let multi = 0;
    while(sum != 1000){
        if(sum > 1000){
            a++;
            b = a+1;
        } else {
            b++;
        }
        c = a**2 + b**2;
        sum = a + b + c;
        if (sum === 1000) {
          // multi = a * b * c;
          console.log(sum);
        }
    }
    console.timeEnd("TIME")
  }

  Euler();
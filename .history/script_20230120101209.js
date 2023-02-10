  function Euler() {
    console.time("TIME")
    let a = 3;
    let b = 4;
    let c = 0;
    let sum = 0;
    while(sum != 1000){
        if(sum > 1000){
            a++;
            b = a+1;
        } else {
            // b++;
        }
        c = Math.sqrt(a**2 + b**2);
        sum = a + b + c;
        if (sum === 1000) {        
          console.log(a*b*c);
        }
    }
    console.timeEnd("TIME")
  }

  Euler();
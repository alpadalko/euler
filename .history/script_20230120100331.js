  function Euler() {
    console.time("TIME")
    let a = 1;
    let b = 2;
    let c = 0;
    let sum = 0;
    while(sum != 1000){
        if(sum > 1000){
            a++;
            b = a+1;
        } else {
            b++;
        }
        c = Math.sqrt(a**2 + b**2);
        sum = a + b + c;
        if (condition) {
          
        }
        console.log(sum);
    }
    console.timeEnd("TIME")
  }

  Euler();
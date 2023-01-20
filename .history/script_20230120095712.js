  function Euler() {
    console.time("TIME")
    var a = 3;
    var b = 4;
    var sum = 0;
    // let multi = 0;
    while(sum !== 1000){
        if(sum > 1000){
            a++;
            b = a+1;
        } else {
            b++;
        }
        c = Math.sqrt(a**2 + b**2);
        console.log(a + b + c);
          // multi = a * b * c;
    }
    console.timeEnd("TIME")
  }

  Euler();
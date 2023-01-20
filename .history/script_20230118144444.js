  function Euler() {
    console.time("TIME")
    var a = 1;
    var b = 2;
    var sum = 0;
    // let multi = 0;
    while(sum !== 1000){
        if(sum > 1000){
            a++;
            b = a+1;
        } else {
            b++;
        }
        c = a**2 + b**2;
        sum = a + b + c;
          // multi = a * b * c;
          console.log(sum);
        }
    }
    console.timeEnd("TIME")
  }

  Euler();
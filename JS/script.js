//Task 1

const one = (arr, carrent) => {
  if (!arr.length) return null;
  const a = parseInt(arr.length / 2);
  return (arr[a] !== carrent) ?
      one((arr[a] > carrent) ? arr.slice(0, a) : arr.slice(a + 1), carrent) :
      arr[a];
};

//Task 2
const obj = {
  a:2,
  prop: 8,
  z: {
    y:5,
    a: 'string',
    foo: {
      a: '+1',
      bar: 'str'
    }
  }
};

function two(obj, key){
  let arr = [];
  const twoRec = (obj, key) => {
    const item = Object.entries(obj)
    for (const value of item) {
        if(value[0]==key) {arr.push(value[1])}
        if(typeof value[1] == "object"){
          twoRec(value[1], key)
        }
    }
}
twoRec(obj, key);
return arr;
}

//Task 3
const abc = [3,40,4,7,9,34,2,6,35,12,22,32,4,4,31];
function three(abc) {
  let sum = 0;
  for (let i = 1; i < abc.length; i++) {
    const newSum = abc[i] + abc[i+1];
    if (sum < newSum) {
      sum = newSum;
    }
    if (i !== abc.length) {
      for (let j = i; j < abc.length; j++) {
        const lastSum = abc[j] + abc[j+1];
        if (sum < lastSum) {
          sum = lastSum;
        }
      }
    }
    return sum;
  };

};
three(abc);


//Task 4
const four = (symbol, ...arr) => arr.join(' ').replaceAll(' ', symbol)

//Task 5
const array = [{ name: "width", value: 10 }, { name: "height", value: 20 }];
function five(array) {
  const obj = {};
  array.forEach(item => obj[item.name] = item.value);
  return obj;
};
five(array);


//Task 6

function six(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}



function two(obj, key){
  const arr = [];
  (function searchRecursive(obj, key){
  const entries = Object.entries(obj)
  for (const item of entries) {
      if(item[0]==key) {arr.push(item[1])}
      if(typeof item[1] == "object"){
          searchRecursive(item[1], key)
      }
  }
})(obj, key)
return arr;
}
console.log(search(obj, 'a'));
function calc() {
  let result = 0;
  function d(n) {
    const dArr = [];
    let dCurrent = n;
    let temp = 2;
    const set = new Set();
    while (temp <= dCurrent) {
      if (dCurrent % temp === 0) {
        dArr.push(temp);
        dCurrent /= temp;
        temp = 2;
        continue;
      }
      temp += 1;
    }
    dArr.forEach(el => set.add(el));
    return set.size + 2 + set.size;
  }

  function nextRectangleNum(r) {
    if (r) {
      let _r = r;
      let rectNumber = 0;
      while (_r) {
        rectNumber += _r;
        _r -= 1;
      }
      nextRectangleNum.currentRectangle.rectCount = r;
      nextRectangleNum.currentRectangle.rectNumber = rectNumber;
      return rectNumber;
    }
    nextRectangleNum.currentRectangle.rectCount += 1;
    nextRectangleNum.currentRectangle.rectNumber += nextRectangleNum.currentRectangle.rectCount;
    return nextRectangleNum.currentRectangle.rectNumber;
  }
  nextRectangleNum.currentRectangle = {
    rectNumber: 1,
    rectCount: 1,
  };
  const n = d(6);
  result = n;
  console.log();
  return result;
}

calc();
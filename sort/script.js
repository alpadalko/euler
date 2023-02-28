function merge(first, second) {
  const arrSort = [];
  let i = 0
  let j = 0;
  while (i < first.length && j < second.length) {
      arrSort.push(
          (first[i] < second[j]) ?
          first[i++] : second[j++]
      );
  }
  return [
      ...arrSort,
      ...first.slice(i),
      ...second.slice(j)
  ];
};

function sort (arr) {
  if (!arr || !arr.length) {
      return null;
  }
  if (arr.length <= 1) {
      return arr;
  }
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  return merge(sort(left), sort(right));;
};

console.time('TIME')
sort();
console.timeEnd('TIME')
function getSameObj(arr) {
  let count = 0;
  for (let { x, y } of arr) {
    if (x === y) {
      count++;
    }
  }
  return count;
}
console.log(
  getSameObj([
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 },
  ])
);
console.log(
  getSameObj([
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
    { x: 4, y: 4 },
    { x: 4, y: 5 },
    { x: 6, y: 6 },
    { x: 7, y: 8 },
  ])
);

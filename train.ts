//TASK G
function getHighestIndex(arr: number[]): number {
  if (arr.length === 0) return -1;

  return arr.reduce(
    (maxIndex, current, i) => (current > arr[maxIndex] ? i : maxIndex),
    0
  );
}

console.log(getHighestIndex([5, 21, 12, 21, 8]));

const merge = (left, right) => {
  if (!left.length) return right;
  if (!right.length) return left;

  const [leftHead, ...leftRest] = left;
  const [rightHead, ...rightRest] = right;

  if (leftHead < rightHead) return [leftHead, ...merge(leftRest, right)];
  return [rightHead, ...merge(left, rightRest)];
};

const mergeSort = array => {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

module.exports = mergeSort;

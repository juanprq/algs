const selectionSort = (array) => {
  for (i = 0; i < array.length; i++) {
    let minIndex = i;
    let minValue = array[minIndex];

    for (j = i; j < array.length; j++) {
      if (array[j] < minValue) {
        minIndex = j;
        minValue = array[j];
      }
    }

    const aux = array[i];
    array[i] = minValue;
    array[minIndex] = aux;
  }

  return array;
};

module.exports = selectionSort;

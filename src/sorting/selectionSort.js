const selectionSort = (array) => {
  for (i = 0; i < array.length; i++) {
    let minIndex = i;

    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
        minValue = array[j];
      }
    }

    const aux = array[i];
    array[i] = array[minIndex];
    array[minIndex] = aux;
  }

  return array;
};

module.exports = selectionSort;

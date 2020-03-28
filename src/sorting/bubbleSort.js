const sort = array => {
  while (true) {
    let swapped = false;

    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        const aux = array[i - 1];
        array[i - 1] = array[i];
        array[i] = aux;

        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return array;
};

module.exports = sort;

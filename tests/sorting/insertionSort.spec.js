const sort = require('../../src/sorting/insertionSort');
const utils = require('../utils');

describe('sort', () => {
  utils.arrayTests(sort);
});

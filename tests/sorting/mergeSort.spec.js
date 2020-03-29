const sort = require('../../src/sorting/mergeSort');
const utils = require('../utils');

describe('sort', () => {
  utils.arrayTests(sort);
});

const sort = require('../../src/sorting/selectionSort');
const utils = require('../utils');

describe('sort', () => {
  utils.arrayTests(sort);
});

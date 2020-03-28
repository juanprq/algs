const sort = require('../../src/sorting/bubbleSort');
const utils = require('../utils');

describe('sort', () => {
  utils.arrayTests(sort);
});

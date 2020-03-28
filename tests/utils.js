const ARRAYS_TO_SORT = [
  [
    [2, 4, 10, 0, 2, 0, 5, 6, 7],
    [0, 0, 2, 2, 4, 5, 6, 7, 10],
  ],
  [
    [1, 2, 4],
    [1, 2, 4],
  ],
  [
    [0, 10, -3, -4],
    [-4, -3, 0, 10],
  ],
];

module.exports = {
  arrayTests: fn => {
    it('should be a function', () => {
      expect(typeof fn).toEqual('function');
    });

    ARRAYS_TO_SORT.forEach(([toSort, toCompare]) => {
      it('should sort the array', () => {
        expect(fn([...toSort])).toEqual(toCompare);
      });
    });
  },
};

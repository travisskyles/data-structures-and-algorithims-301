'use strict';

const insertShiftArray = require('../arrayShift');

//make sure inputs are the correct type
//ensure value is placed in the correct spot

describe('Make sure that the insertArrayShift function works correctly', () => {
  it('returns an array with the new value in the middle', () => {
    expect(insertShiftArray([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 5, 3, 4]);
  });
});

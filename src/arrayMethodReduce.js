'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = this[0];
    let startIndex = 1;

    if (arguments.length === 2) {
      start = initialValue;
      startIndex = 0;
    }

    for (let index = startIndex; index < this.length; index++) {
      start = callback(start, this[index], index, this);
    }

    return start;
  };
}

module.exports = applyCustomReduce;

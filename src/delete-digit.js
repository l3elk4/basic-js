const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split("");
  let biggestNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    let calcAbr = (arr.slice(0, i) + arr.slice(i + 1)).split(",").join("") * 1;
    if (calcAbr > biggestNumber) {
      biggestNumber = calcAbr;
    }
  }
  return biggestNumber;
}


module.exports = {
  deleteDigit
};

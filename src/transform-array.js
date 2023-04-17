const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!Array.isArray(arr)){  throw new Error("'arr' parameter must be an instance of the Array!")
}
if (!(arr instanceof Array)){  throw new Error("'arr' parameter must be an instance of the Array!")
}
  if(arr===null || arr===undefined || !Array.isArray(arr)) {return false}
 
  if (arr.length === 0) {return []}
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      newArray.push(arr[i + 1])
      newArray.pop()
      i += 2
    } else if (arr[i] === '--discard-prev') {
      newArray.pop()
    } else if (arr[i] === '--double-next') {
      newArray.push(arr[i + 1])
    } else if (arr[i] === '--double-prev') {
      newArray.push(arr[i - 1])
    } else {
      newArray.push(arr[i])
    }
  }
  if (arr.includes('undefined')) {return newArray}
  else {return newArray.filter((el) => el !== undefined)} 
}

module.exports = {
  transform
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (arr instanceof Array){
     let result = 0;
     for (let i=0; i<arr.length;i++){
      let counter = this.calculateDepth.call(this, arr[i]);
      if(result<counter){
        result = counter;}
     }
     return result+1;}
     else {return 0}
  }

}
module.exports = {
  DepthCalculator
};



const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(n) {
  const modernActivity = 15; 
  const halfLifePeriod = 5370;
  let k = 0.693/halfLifePeriod;
  if (typeof (n) !== 'string') {return false}
  let t = (Math.log(modernActivity/n))/k;
  if (0<=n<=15) {return (Math.ceil(t))} 
  else return false
}
module.exports = {
  dateSample
};
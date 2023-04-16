const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason() {
  
  if (getMonth = 11 || 0 || 1) {return 'winter'}
  else if (getMonth = 2 || 3 || 4) {return 'spring'}
  else if (getMonth = 5 || 6 || 7) {return 'summer'}
  else if (getMonth = 8 || 9 || 10) {return 'fall'}
  
}
module.exports = {
  getSeason
};

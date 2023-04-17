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
function getSeason(date) { 
  if((date) == null) {return 'Unable to determine the time of year!'};
  
  if( Object.prototype.toString.call(date) !== '[object Date]') throw new Error("Invalid date!")

  if( Object.entries(date).length > 0) throw new Error("Invalid date!")
  
  if (isNaN(date))  throw new Error("Invalid date!")
  
     let getSeason =(month) =>{
       if ([11,0,1].includes(month)) {return "winter"}
      else if ([2,3,4].includes(month)) {return "spring"}
      else if ([5,6,7].includes(month)) {return "summer"}
      else if ([8,9,10].includes(month)) {return "fall"}
       return false;
      } 
       let month = date.getMonth() ;
       return getSeason(month); 
  }
module.exports = {
  getSeason
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    let newTeamName=[];if(members===null || members===undefined || !Array.isArray(members)) {return false}
    for (let el of Object.values(members)){
    if(typeof(el) === 'string'){
    el = el.split(' ').join('');
    newTeamName.push(el[0].toUpperCase())
      } 
    }
    newTeamName=newTeamName.sort(); return newTeamName.join('')
  }

module.exports = {
  createDreamTeam
};

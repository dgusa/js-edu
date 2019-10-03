/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  
  preferences, 
  knowsProgramming,
  studentConfig
    ) {
    if (knowsProgramming) {
      return Math.ceil(800/studentConfig[preferences]);
    } else {
      return Math.ceil(1300/studentConfig[preferences]);
      }
      };  
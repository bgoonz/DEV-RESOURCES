function arrFrom12N( n ) {
  return Array.from( Array( n ).keys() );
}
let numArrN = arrFrom12N( 100 );
console.log( 'numArrN: ', numArrN );
/*   numArrN:------>  [0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,96, 97, 98, 99]    ------->    */

// ********************************************************************************* ********************************************************************************* *********************************************************************************//

function stringifyArr( numArr ) {
  /*String: StringConstructor Allows manipulation and formatting of text strings and determination and location of substrings within strings.*/
  return numArr.map( String )
}
let numStrArr = stringifyArr( numArrN );
console.log( 'numStrArr : ', numStrArr );
/*numStrArr :  ['0',  '1',  '2',  '3',  '4',  '5',  '6',  '7',  '8',  '9','10', '11', '12', '13', '14', '15', '16', '17', '18', '19','20', '21', '22', '23', '24', '25', '26', '27', '28', '29','30', '31', '32', '33', '34', '35', '36', '37', '38', '39','40', '41', '42', '43', '44', '45', '46', '47', '48', '49','50', '51', '52', '53', '54', '55', '56', '57', '58', '59','60', '61', '62', '63', '64', '65', '66', '67', '68', '69','70', '71', '72', '73', '74', '75', '76', '77', '78', '79','80', '81', '82', '83', '84', '85', '86', '87', '88', '89','90', '91', '92', '93', '94', '95', '96', '97', '98', '99]     */
// ********************************************************************************* ********************************************************************************* *********************************************************************************//


let consoleTableArgObj = {};
class Table {
  constructor( col1, col2 ) {
    this.col1 = col1;
    this.col2 = col2;
  }
}
consoleTableArgObj.row1Title = new Table( "1", "2" );
consoleTableArgObj.row2Title = new Table( "3", "4" )
consoleTableArgObj.row3Title = new Table( "5", "6" );
consoleTableArgObj.row4Title = new Table( "7", "8" )
/*
console-table.png
*/

//-------------------------------------------------------------------
console.table( consoleTableArgObj );
// ********************************************************************************* ********************************************************************************* *********************************************************************************//

exports.consoleTable = consoleTableArgObj;

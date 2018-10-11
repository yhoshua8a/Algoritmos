// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
function maxChar(str) {
    const array = str.split('');
    const mySet = Array.from(new Set(array));
    let count = 0;
    let char;
  
    const filtered = mySet.map((setiItem) => {
     return array.filter((arrayElement) => arrayElement === setiItem);
    });
  
    filtered.map((item) => {
       if(item.length > count){
         count = item.length;
         char = item[0];
       }
    });
  
   return char
}
*/

function maxChar(str) {
    const charsMap = {};
    let maxChar = '';
    let maxNumber = 0;

    for(let char of str){
      charsMap[char] = charsMap[char] + 1 || 1;
    }

    for(let key in charsMap){
        if(charsMap[key] > maxNumber){
           maxNumber = charsMap[key];
           maxChar = key;
        }
    }

    return maxChar;
}

module.exports = maxChar;

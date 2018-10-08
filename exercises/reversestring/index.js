// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*Fisrt solution
function reverse(str) {
    const array = str.split('').reverse();
    return array.join('');
}
*/

/*Second solution
function reverse(str) {
    let reversed = '';

    for (let character of str) {
       reversed = character + reversed;
    }

    return reversed;
}
*/
function reverse(str) {
    const array = str.split('');
    return array.reduce((reversed, character) => character + reversed);
}

module.exports = reverse;

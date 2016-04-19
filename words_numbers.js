module.exports = function(filePath){

var fs = require('fs');

this.numbers = function() {
var words_numbers = fs.readFileSync(filePath, 'utf8' );
var string = words_numbers
    .replace("I saw ", "")
    .replace(" bears, and", "")
    .replace(" toads in", "")
    .replace(" meters from the tallest tree in the park.", "")
    .split(" ");
//3 bears, and 7 toads in 50 meters from the tallest tree in the park.

var num = [];

  string.forEach(function(onlyNum){
    var newStr = onlyNum

    var number = Number(newStr);

    num.push({
      number: number
    })

  });

return num;
}

// this.shorter = function(){
// var words_numbers = fs.readFileSync(filePath, 'utf8' );
//
//
//   var string = words_numbers.replace(/\d+/g, '').split(" ");
//     console.log(string);
//
//   var words = [];
//
//   string.forEach(function(word){
//   //  console.log(word);
//
//
//     if (word.length <= 3) {
//       words.push(word);
//     }
//
//   });
//
// return words;
// //   //I saw 3 bears, and 7 toads in 50 meters from the tallest tree in the park.
// }



};

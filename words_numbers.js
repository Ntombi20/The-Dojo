var fs = require('fs');

module.exports = function(filePath){

this.numbers = function() {
  var words_numbers = fs.readFileSync(filePath, 'utf8' );

  var no = [];

  var sentence = words_numbers
      .replace("I saw ", "")
      .replace(" meters from the tallest tree in the park.", "")
      .split(" bears, and ");
      //3 bears, and 7 toads in 50
      console.log(sentence);

    // sentence.forEach(function(no){
    //   var str = no.split(" ");
    //   console.log(str[0]);
    // });

}

};

var fs = require('fs');

var file = fs.readdirSync('./files');

file.forEach(function(file){
  var friends = fs.readFileSync('./files/' + file, 'utf8' )

  var list = [];

  var friend = friends.split(", ");

    friend.forEach(function(newStr){
      var string = newStr.split(" is ");

      var name = string[0];
      var age = Number(string[1]);

      list.push({
        name: name,
        age: age
      });
    });

  console.log(list);
    //return list;
});
//
// exports.aging_friends = function(friends) {
//   var list = aging_friends(friends);
//   console.log(list);
//   //return list;
// }


var aging_friends = require('./aging---friends.js');

//  = function(friends){
//   var newList = aging_friends(friends);
// console.log(newList);
//
  // var older = newList[0].age;
  // var olderName = "";
  //
  // newList.forEach(function(yay){
  //    if (yay.age < older ){
  //           older = yay.age;
  //           olderName = yay.name;
  //     }
  // });
// //  console.log(olderName);
// };

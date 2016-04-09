var fs = require('fs');

module.exports = function(filePath){

this.allFriends = function() {

//file.forEach(function(file){
  var friends = fs.readFileSync(filePath, 'utf8' )

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


  return list;
//});
}
};

//allFriends();
// exports.allFriends = function() {
//   var list = allFriends();
//   //console.log(list);
//   return list;
// }

// function oldest(friends){
// var old = require('./aging_friends.js');
// var newList = old.aging_friends();


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
//};

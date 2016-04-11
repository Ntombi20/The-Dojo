var fs = require('fs');

module.exports = function(filePath){

//all friends
this.allFriends = function() {

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

}


// the oldest
this.oldest = function(list){
  var newList = list;

  var older = newList[0].age;
  var olderName = "";

  for (var list in newList){
    if (newList[list].age > older) {
      older = newList[list].age;
      olderName = newList[list].name;

    };
  };
  return olderName;
}


// the youngest
this.youngest = function(list){
  var newListYoung = list;

  var younger = newListYoung[0].age;
  var youngerName = "";

  for (var list in newListYoung){
    if (newListYoung[list].age < younger) {
      younger = newListYoung[list].age;
      youngerName = newListYoung[list].name;

    };
  };
  return youngerName;
}
};

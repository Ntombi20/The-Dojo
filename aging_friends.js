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

  var oldest = {};

  for (var list in newList){

    if (newList.age > older) {
      var older = newList.age;
      var olderName = newList[list].name;

    };
       console.log(older);
  };

}

};

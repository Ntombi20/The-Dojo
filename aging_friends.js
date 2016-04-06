var fs = require('fs');

  var ages = fs.readdir('./files/age.csv', 'utf8');
  
  var friends = "Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27".split(", ");

  var oldestList = [];

  for (var i = 0; i < friends.length; i++) {
      var string = friends[i].split(" is ");

      var name = string[0];
      var age = Number(string[1]);

    oldestList.push({
      name: name,
      age: age
    });

   console.log(oldestList);

    //return oldestList;
    }

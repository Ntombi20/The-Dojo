var assert = require("assert");

describe("Aging friends", function(){

  var expectedFriends = [
      {
      "name" : "Xola",
      "age" : 23
      },
      {
      "name" : "Peter",
      "age" : 18
      },
      {
      "name" : "Oya",
      "age" : 29
      },
      {
      "name" : "Ellie",
      "age" : 20
      },
      {
      "name" : "Sive",
      "age" : 27
      }
  ]

    it('should return all the friends', function(done){

      var Aging_friends = require("../aging_friends");
      var age = new Aging_friends('./files/age.txt');
        console.log("age");
          // var expectedFriends = [
          //     {
          //     "name" : "Xola",
          //     "age" : 23
          //     },
          //     {
          //     "name" : "Peter",
          //     "age" : 18
          //     },
          //     {
          //     "name" : "Oya",
          //     "age" : 29
          //     },
          //     {
          //     "name" : "Ellie",
          //     "age" : 20
          //     },
          //     {
          //     "name" : "Sive",
          //     "age" : 27
          //     }
          // ]
          var age_txt = age.allFriends();
          //console.log(age_txt);
            assert.deepEqual(expectedFriends, age_txt);
            done();

     });


    it('should return the oldest friends', function(done){

        var Aging_friends = require("../aging_friends");
        var age = new Aging_friends('./files/age.txt');

          var expectedAge =  {
              "name" : "Oya",
              "age" : 29
              }

          var theOldest = age.oldest(expectedFriends);

            assert.deepEqual(expectedAge, theOldest);
            done();

    });


    it('should return friends that are younger than Ellie', function(done) {

      var Aging_friends = require("../aging_friends");
      var age = new Aging_friends('./files/age.txt');

        var expectedYoungAge =[
            {
            "name" : "Peter",
            "younger" : 18
            }
        ]

      var young = age.tooYoung(expectedFriends)

          assert.equal(expectedYoungAge, young);
          done();

    });
});

var assert = require("assert");

describe("Aging friends", function(){

    it('should return the oldest friends', function(done){

        var Aging_friends = require("../The-Dojo");
        var age = new Products('./files/age.txt');
        age.oldest(function(err, age){
          var expectedAge = [
              {
              "name" : "Oya",
              "oldest_age" : 29
              }
          ]
            assert.deepEqual(expectedAge, age);
            done();
        });
    });


    it('should return friends that are younger than Ellie', function(done) {

      var Aging_friends = require("../The-Dojo");
      var age = new Products('./files/age.txt');
      age.oldest(function(err, age){
        var expectedYoungAge = [
            {
            "name" : "Peter",
            "younger" : 18
            }
        ]
          assert.equal(expectedYoungAge, age);
          done();
      });
    });
});

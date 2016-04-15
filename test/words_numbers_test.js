var assert = require("assert");

describe("Words and numbers", function(){


    it('should return all the numbers in a sentence', function(done){

      var Words_numbers = require("../words_numbers");
      var count = new Words_numbers('./files/wordsNum.txt');

            var expectedNumber = [
              {
              number: 3
              },
              {
              number: 7
              },
              {
              number: 50
              }
            ]

            assert.deepEqual(expectedNumber, count.numbers());
            done();

     });


      it('should return all words shorter than 3 in a sentence', function(done){

        var Words_numbers = require("../words_numbers");
        var count = new Words_numbers('./files/wordsNum.txt');

              assert.equal(["I", "saw", "and", "in", "the", "in", "the"], count.shorter());
              done();

      });


      it('should return all find all the numbers in a sentence bigger than 15', function(done){

        var Words_numbers = require("../words_numbers");
        var count = new Words_numbers('./files/wordsNum.txt');

              assert.equal(50, count.bigger());
              done();

      });


      it('should return count all the words in a sentence', function(done){

        var Words_numbers = require("../words_numbers");
        var count = new Words_numbers('./files/wordsNum.txt');

              assert.equal(51, count.words());
              done();

      });


      it('should return count all numbers in a sentence', function(done){

        var Words_numbers = require("../words_numbers");
        var count = new Words_numbers('./files/wordsNum.txt');

              assert.equal(60, count.countNum());
              done();

      });
});

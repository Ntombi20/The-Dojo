var assert = require("assert");
var Traffic_light = require("../traffic_light");
var lights = new Traffic_light('./files/traffic.txt');

describe("Traffic light dash", function(){

  var expectedLights = [
    {
    "color" : "red",
    "number" : 3
    },
    {
    "color" : "green",
    "number" : 2
    }
  ]

  var expectedAllLights = [
    {
    "name" : "traffic lights",
    "number" : 9
    }
  ]

  it('should return the totally traffic light', function(done){
        var dash = lights.totallyTrafficLight();

          assert.deepEqual(expectedAllLights, dash);
          done();

    });


  it('should return red nd green lights', function(done){
        var dash = lights.traffic();

          assert.deepEqual(expectedLights, dash);
          done();

   });


   it('should return how many lights were orange?', function(done){
         var dash = lights.yellow(expectedLights, expectedAllLights);

           assert.equal(4, dash);
           done();

   })
});

var assert = require("assert");

describe("Traffic light dash", function(){


  it('should return the totally traffic light', function(done){

    var Traffic_light = require("../traffic_light");
    var lights = new Traffic_light('./files/traffic.txt');

        var dash = lights.totallyTrafficLight();

        var expectedAllLights = [
          {
          "name" : "traffic lights",
          "number" : 9
          }
        ]
          assert.deepEqual(expectedAllLights, dash);
          done();

   });


  it('should return how many lights were orange?', function(done){

    var Traffic_light = require("../traffic_light");
    var lights = new Traffic_light('./files/traffic.txt');

        var dash = lights.traffic();

        var expectedLights = [
          {
          "color" : "red",
          "number" : 3
          },
          {
          "color" : "green",
          "number" : 2
          },
          {
          "color" : "orange",
          "number" : 4
          }
        ]
          assert.deepEqual(expectedLights, dash1);
          done();

   });

});

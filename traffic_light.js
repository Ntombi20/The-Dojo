var fs = require('fs');

module.exports = function(filePath){

//getting all the traffic light
this.totallyTrafficLight = function() {

var traffic_light = fs.readFileSync(filePath, 'utf8' );

var list = [];

var journey = traffic_light
  .replace("on my way to work. On my way in 3 were red, 2 were green.", "")
  .split("There are ")
  .slice(1);

   journey.forEach(function(newStr) {
     var string = newStr.split(" ");

     var number = Number(string[0]);
     var name = string[1] + " " + string[2];

     list.push({
       name: name,
       number:number
     })

   });

  return list;
}


//now get each traffic light for each color for red nd green
this.traffic = function(){

  var traffic_light = fs.readFileSync(filePath, 'utf8' );

  var journey = traffic_light
      .replace(" On my way in", "")
      .replace("There are 9 traffic lights on my way to work.", "")
      .split(",");

      var redGreen = [];

      journey.forEach(function(str) {
        var newStr = str.replace(".", "").replace("\n", "").split(" were ");
        var number = Number(newStr[0]);
        var color = newStr[1];

        redGreen.push({
          number: number,
          color: color
        })
      })
         return redGreen;


}

// now the yellow light

this.yellow = function(redGreen, list){
   var numGreenRed = redGreen[0].number + redGreen[1].number;
   var numAll = list[0].number;

   var yellow = numAll - numGreenRed;

   return yellow;
}

};

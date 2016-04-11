var fs = require('fs');

module.exports = function(filePath){

//getting all the traffic light
this.totallyTrafficLight = function() {

var traffic_light = fs.readFileSync(filePath, 'utf8' );

var list = [];

var journey = traffic_light
  .replace("on my way to work. ", "")
  .replace("On my way in 3 were red, 2 were green.", "")
  .split("There are ")
  .slice(1);

   journey.forEach(function(newStr) {
     var string = newStr.split(" ");
console.log(string);
     var number = Number(string[0]);
     var name = string[1] + " " + string[2];

     list.push({
       name: name,
       number:number
     })

   });

  return list;
}

};

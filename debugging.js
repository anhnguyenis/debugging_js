//airport constructor function
function Airport(weather) {
  debugger
  this.weather = weather
}

//airport land method definition
Airport.prototype.land = function(plane) {
  debugger
  if (plane.isLanded()) {
    console.log("hello1");
  } else if (this.weather.isStormy()) {
    console.log("hello2");
  } else {
    console.log("hello3");
  }
}

//plane constructor function
function Plane() {}

Plane.prototype.isLanded = function() {
  return false;
}

//weather constructor function
function Weather() {}

Weather.prototype.isStormy = function(){
  debugger
  return false;
}

//create new objects of weather, airport and plane
weather = new Weather()
airport = new Airport(weather)
plane = new Plane()

//airport calls a plane to land
airport.land(plane)

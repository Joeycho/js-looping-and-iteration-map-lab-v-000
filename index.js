// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(element){return element.toLowerCase()})
}

function nameToAttributes(drivers){
  let temp = drivers.map(function(element){return element.split(" ")})
  let obj = new Object();
  obj.firstName = temp[0]
  obj.lastName = temp[1]
  return obj
}

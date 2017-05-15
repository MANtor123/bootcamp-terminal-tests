module.exports = function(regNr){

  var split = regNr.split(',')
  var town = [];
  for(var i =0; i < split.length; i++){
    if(split[i].startsWith('CL')){
      town.push(split[i])
    }
  }
  
  return town.length;
}

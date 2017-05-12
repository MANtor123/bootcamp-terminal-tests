module.exports = function(){
  if (regNr.startsWith ("CY")) {
return "Bellville";
}

else if (regNr.startsWith("CJ")) {
return "Paarl";
}

else if (regNr.startsWith("CA")) {
return "Cape Town";
}

else {
return "Some other place!";
}
};

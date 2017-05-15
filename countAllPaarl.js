module.exports = function (regNr) {
  var x = regNr.split (", ");

var paarl = [];
for (var i=0; i<x.length; i++) {

var values = x[i];
if (values.startsWith("CJ")) {
  paarl.push(values);
}
}
return paarl.length;
};

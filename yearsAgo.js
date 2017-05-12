module.exports = function(previousYear){
  var today = new Date()
	var currentYear = today.getFullYear ()
  
	var year = currentYear - previousYear
	return year;
}

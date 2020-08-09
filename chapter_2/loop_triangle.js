/*
	Write a loop that makes seven calls to console.log to output the following:
	#
	##
	###
	####
	#####
	######
	#######
*/

// First Way
let pound = "#";
for(var counter = 0; counter < 7; counter++) {
	console.log(pound);
	pound += "#";
};

// Second Way
for(var n = "#"; n.length <= 7; n += "#") {
	console.log(n);
};
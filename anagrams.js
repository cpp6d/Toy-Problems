//Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

Parameters:

string (required) - a string of characters.



function allAnagrams (string) {
	var current='';
	var result = [];
  var recurse = function(recStr,old) {
  	if(recStr.length === 0) {
  		result.push(old)
  	} else {
  		for(var i = 0; i < recStr.length; i++) {
  			current = recStr[i];
  			recurse(recStr.slice(0,i)+recStr.slice(i+1),old+current);
  		}
  	}
  }
  recurse(string,'');
  console.log(result);
  return [...new Set(result)];
}

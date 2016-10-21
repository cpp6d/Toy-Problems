
// Common Characters
// Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

// Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

// Example: commonCharacters('acexivou', 'aegihobu')

// Returns: 'aeiou'



commonCharacters = function(string1, string2){
  var temp1= string1.split('');
  var common=[];
  temp1.forEach(function(item){
  	if(string2.indexOf(item) !== -1){
  		if(item ===' ' || common.indexOf(item)!== -1){
  			
  		}else{
  			common.push(item);
  		}	
  }
  	
  });
return common.join('');	
};

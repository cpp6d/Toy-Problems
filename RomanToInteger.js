Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.


var romanToInt = function(s) {
    var rnSplit = s.split('');
  var number = 0;
  var Roman ={
  	'I': 1 ,
  	'V':5,
  	'X':10,
  	'L':50,
  	'C':100,
  	'D':500,
  	'M':1000};
  
  for(let i = 0; i<rnSplit.length;i++){
  	if(Roman[rnSplit[i]] === undefined){
  		return 'null';
  	}else{
  		if(Roman[rnSplit[i]] < Roman[rnSplit[i+1]] && Roman[rnSplit[i+1]]!== undefined){
  			// answer
  			number += Roman[rnSplit[i+1]]-Roman[rnSplit[i]];
  			i++;
  		}else{
  			number += Roman[rnSplit[i]];
  		}
  		
  	}	
  
}
return number; 
};

//Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

function characterFrequency (string) {
  // Write your code here, and
  // return your final answer.
  var object={};
  var sorted=[];
  var final = [];
  for (var i= 0; i <string.length ; i++){
  	if(object[string[i]]){
  		object[string[i]]++;
  	}else{
  		object[string[i]]= 1;
  	}
  }
  for(var key in object){
  	sorted.push(key);
  }
  sorted.sort().forEach(function(item){final.push([item, object[item]])});
  final.sort(function(a,b){
  	if(a[1] === b[1])
  		return a[0] < b[0]? -1:1;
  		return a[1] < b[1]? 1:-1;
  })
  return final;
}
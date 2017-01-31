The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".



/////////////

var convert = function(s, numRows) {
    let lines={}
    let count = 1
    let down = true
    let temp = []
    
    for(let i = 1; i<=numRows; i++){
        lines[i] = []
    }
    
    for(let j = 0; j<s.length ; j++){
        lines[count].push(s[j])
        if(numRows>1){
            if(count === numRows){
                down = false
            }
            if(count === 1){
                down = true
            }
            if(down){
                count++
            }else{
                count--
            }
        }
    }
    for(let k = 1 ; k<=numRows; k++ ){
        temp = temp.concat(lines[k])
    }
    return temp.join('')
};

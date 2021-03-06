Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

Subscribe to see which companies asked this question.


var lengthOfLongestSubstring = function(s) {
    var i = 0, j = 0,
    maxLen = 0;
    while (j < s.length) {
        if (s.substring(i, j).indexOf(s[j]) < 0) {
            j++;
            maxLen = Math.max(maxLen, j - i);
         }else{
            i++;
         }
     }
     return maxLen;
};

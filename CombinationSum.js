Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [2, 3, 6, 7] and target 7, 
A solution set is: 
[
  [7],
  [2, 2, 3]
]



var combinationSum = function(candidates, target) {
    let combo = []
    let temp = []
    let recur = function(options, store, total){
        if(total === target){
         combo.push(store)
         return
        }
        if(total<target){
            for(let i= 0;i<options.length;i++){
                if(total+options[i] <=target){
                    recur(options.slice(i), store.concat(options[i]),total+options[i])
                }
            }
        }
    }
    recur(candidates, temp, 0)
    return combo
};

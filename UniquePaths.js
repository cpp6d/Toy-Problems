A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let mCount = 0
    let nCount = 0
    let arr = []
    for(let i = 0 ; i<m ;i++){
        arr.push([])
    }
    while(mCount < m){
        
        while(nCount< n){
            if(mCount === 0){
                if(nCount>0){
                    arr[mCount].push(1)
                    nCount++
                }else{
                    arr[mCount].push(1)
                    nCount++
                }
            }else{
                if(nCount === 0){
                    arr[mCount].push(1)
                    nCount++
                }else{
                    arr[mCount].push(arr[mCount-1][nCount] + arr[mCount][nCount-1])
                    nCount++
                }
            }
            
        }
        nCount=0
        mCount++
    }
    return arr[m-1][n-1]
};

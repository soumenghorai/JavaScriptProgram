/*
Count maze problem 
Problem Statement:
The problem is to count all the possible paths on an m x n grid from top left (grid[0][0]) to bottom right (grid[m-1][n-1])
Having constraints that from each cell you can either move only to right or down
Input: m = 2, n = 3
Output: 3
*/

function numberOfPaths(m, n)
    {
    
        // If either given row number is first or
        // given column number is first
        if (m == 1 || n == 1)
            return 1;
        
        // If diagonal movements are allowed then
        // the last addition is required.
        return numberOfPaths(m - 1, n) + numberOfPaths(m, n - 1);
       
       // + numberOfPaths(m - 1, n - 1);
    }
    
    console.log(numberOfPaths(2,3));
    

/*
The edit distance between two strings refers to the minimum number of character insertions,
deletions, and substitutions required to change one string to the other. For example, the edit
distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”,
and append a “g”
*/

// Time complexity is O(m*n)
// Space complexity is O(m*n)
function editDistance(str1, str2)  {
  // Create dp empty 
  let dp = new Array(str1.length + 1);
  for(let i = 0; i < dp.length; i++) {
  dp[i] = new Array(str2.length+1);
  }
  
  for(let i = 0; i < dp[0].length; i++) {
  dp[0][i] = i;
  }
  
  for(let i = 0; i < dp.length; i++) {
  dp[i][0] = i;
  }
  
  for(let i = 1; i <= str1.length; i++) {
  for(let j = 1; j <= str2.length; j++) {
    // Pattern says if the letter is the same
      // we return the diagional which means
      // the number of operations of the previous analysis
      if(str1[i-1] === str2[j-1]) {
      dp[i][j] = dp[i - 1][j - 1];
      } else {
      dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1;
      }
    }
  }
  
    console.log(dp);
  
  return dp[str1.length][str2.length];
  
}

str1 = "azced";
str2 = "abcdef";
console.log(editDistance(str1, str2));
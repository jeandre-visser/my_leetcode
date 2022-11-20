/**
 * @param {number} n
 * @return {number}
 */

 var climbStairs = function(n) {
     if (n < 3) return n;

     let first = 1; 
     let second = 2;

     for (let i = 3; i <= n; i++) {
      let third = first + second;
      first = second;
      second = third;
     }
     return second;
 };

 // Test cases

 /**
  * n = 2
  * Output 2
  * 
  * n = 3
  * Output 3
  * 
  * n = 4
  * Output 5
  */


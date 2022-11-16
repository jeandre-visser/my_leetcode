/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  // declare an array of the triangle
  let triangle = new Array(numRows);

  // generate an array of each row in triangle witht he outer values being 1's
  for (let i = 0; i < numRows; i++) {
      let row = new Array(i + 1);
      row[0] = 1;
      row[row.length - 1] = 1

      // Generate values between the outer 1's
      for (let j = 1; j < row.length - 1; j++) {
          let rowAbove = triangle[i - 1];
          row[j] = rowAbove[j] + rowAbove[j - 1];
      }
      // the row has been built, so place it into pascal's triangle
      triangle[i] = row;
  }
  return triangle;
};


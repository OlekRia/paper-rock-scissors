/**
 * Zips multiple arrays into an array of tuples, where each tuple contains the corresponding elements
 * from each input array. The resulting array has the length of the shortest input array.
 * 
 * P.S. Yes, the type is any :), because it really anything
 *
 * @param {...any[]} arrays - The arrays to be zipped.
 * @return {any[][]} An array of tuples, where each tuple contains the corresponding elements from each input array.
 */
export const zip = (...arrays: unknown[][]): unknown[][] => {
  // shortest array
  const minLength = Math.min(...arrays.map(arr => arr.length));
  
  // Create an array of tuples
  const result = [];
  for (let i = 0; i < minLength; i++) {
    const tuple = arrays.map(arr => arr[i]);
    result.push(tuple);
  }
  
  return result;
}
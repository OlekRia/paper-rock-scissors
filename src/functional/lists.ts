/**
 * Zips multiple arrays into an array of tuples, where each tuple contains the corresponding elements
 * from each input array. The resulting array has the length of the shortest input array.
 *
 * @template T - The type of elements in the input arrays.
 * @param {...T[]} arrays - The arrays to be zipped.
 * @returns {T[][]} An array of tuples, where each tuple contains the corresponding elements from each input array.
 */
export function zip<T>(...arrays: T[][]): T[][] {
  // Find the length of the shortest array
  const minLength = Math.min(...arrays.map(arr => arr.length));

  // Create an array of tuples
  const result: T[][] = [];
  for (let i = 0; i < minLength; i++) {
    const tuple: T[] = arrays.map(arr => arr[i]);
    result.push(tuple);
  }

  return result;
}
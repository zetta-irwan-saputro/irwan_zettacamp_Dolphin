/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
  const uniqueValue = [];
  let currentMajorityLength = 0;
  let currentMajority = nums[0];

  for (let i = 0; i < nums.length; i++) {
    // check uniq value
    // console.log(uniqueValue.indexOf(nums[i]));
    if (uniqueValue.indexOf(nums[i]) < 0) {
      uniqueValue.push(nums[i]);
      const valueLength = nums.filter((el) => el === nums[i]).length;

      // check if valueLength greater than currentMajorityLength
      if (valueLength > currentMajorityLength) {
        currentMajority = nums[i];
        currentMajorityLength = valueLength;
      }
    }
  }
  // console.log('uniqueValue', uniqueValue);
  return currentMajority;
}

console.log(majorityElement([3, 2, 3, 2, 2])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2

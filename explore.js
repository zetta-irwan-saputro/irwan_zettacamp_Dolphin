// explore

// logic test with for
function containDuplicate(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (result.indexOf(nums[i]) >= 0) {
      return true;
    }
    result.push(nums[i]);
  }
  return false;
}

console.log(containDuplicate([1, 2, 3, 1])); // Output: true
console.log(containDuplicate([1, 2, 3, 4])); // Output: false
console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

// what is lodash _.uniq()
let arr = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(_.uniq(arr));

const nums = [1,2,3,4,5,6,7,8,9,10];
// const part = nums.slice(3, 6);

const removed = nums.splice(3, 5, 55,23,13)
// console.log(removed);
// console.log(part);
// console.log(nums);

const together = nums.join(",");
console.log(together);

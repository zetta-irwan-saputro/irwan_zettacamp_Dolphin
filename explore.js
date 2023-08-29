// function majorityElement(nums) {
//   let arr = [...new Set(nums)];
//   const majorityThreshold = nums.length / 2;

//   for (let i = 0; i < nums.length; i++) {}
// }

// console.log(majorityElement([4, 5, 3, 5, 5, 5, 5, 3, 2, 3])); // Output: 3
// console.log(majorityElement([2, 2, 1, 1, 2])); // Output: 2

// create object
const obj1 = {
  nama: 'irwan',
  no: '0986976857',
  func: function iwan() {
    return 'halo';
  },
};

// console.log(obj1.func());

// spread operator ...
// example best practice to concate 2 array or more
const student = ['irwan', 'cahyo', 'saputro'];
const worker = ['novi', 'dini', 'ruri'];

const humans = [...student, ...worker];
// console.log(humans);

// using to copy array

// const student1 = student;
const student1 = [...student];
student1[0] = 'didi';

// console.log(student1);

// rest parameter
const hallo = (irwan, ...nama) => {
  return nama;
  //   return irwan;
};

console.log(hallo('irwan', 'oki', 'yuana'));

// destructuring
const gerindra = ['prabowo', 'megawati', 'anis', 'ganjar'];

const [ketua, wakil, ...anggota] = gerindra;

console.log(ketua);
console.log(wakil);
console.log(anggota);

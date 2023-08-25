// 2 favourite book
let book1 = 'Bill Gates';
const book2 = 'Bill Gates';

// conditional with ternary operator
const hasil = book1 === book2 ? true : false;
console.log(hasil);

// ---------------------------------------------------------------------------------------------------

// variabel price
const priceBook1 = 12000;
const priceBook2 = 15000;

// compare price
const highestPrice = priceBook1 > priceBook2 ? `${book1} more pricey with ${priceBook1}` : `${book2} more pricey with ${priceBook2}`;
console.log(highestPrice);

// ---------------------------------------------------------------------------------------------------

// find average
const average = priceBook1 + priceBook2 / 2;
console.log(`the average is ${average}`);

// result of average
const rangeOfPrice = average > 500000 ? 'Expensive' : 'Cheap';
console.log(rangeOfPrice);

// ---------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------
// explore

// create object
const mahasiswa = {};
mahasiswa['Name'] = 'Irwan Cahyo Saputro';
mahasiswa['Class'] = 12;
mahasiswa['Active'] = true;

// console.log(mahasiswa);

// assignment operator
let x = 10;
let result = x + 10;
let result2 = (x += 10);
let y = 10;
let result3 = y - 2;
let result4 = (y -= 2);
let result5 = 4 ** 3;

// comparison operators
let even = 6;
let odd = 7;

const oddOrEven = (a) => {
  if (a % 2 == 0) {
    return `${a} is even number `;
  } else {
    return `${a} is odd number `;
  }
};

// console.log(oddOrEven(even));
// console.log(even === odd);
// console.log(even !== odd);
// console.log(even >= odd);
// console.log(even <= odd);

// aritmatic operations

let angkaTuju = 7;
angkaTuju++;
angkaTuju--;

let a = 5;
// console.log(5 + ++a);
// console.log(a);

for (let i = 0; i < 3; i++) {
  //   console.log('halo');
}

// logical operators && || !

const a1 = 1;
const a2 = 2;

if (a1 < a2 && a2 == 2) {
  //   console.log('halo saya true');
} else {
  //   console.log('saya salah');
}

if (a1 == 1 || a2 == 1) {
  //   console.log('halo saya true');
} else {
  //   console.log('saya salah');
}

// truthy falsy
if (!a1) {
  //   console.log('halo saya false');
} else {
  //   console.log('saya true');
}

// string operators

let saya = 'saya';
let makan = 'makan';

// console.log(saya + ' ' + makan);

// bitwise operators

const h = 4;
// console.log(h >>> 2);

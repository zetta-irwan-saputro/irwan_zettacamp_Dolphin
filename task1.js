// function purchasing

function purchasingBook(bookTitle = undefined, bookPrice = undefined, discount = 2, tax = 2) {
  //   assignment
  const titleBook = bookTitle.toString();
  const priceBook = parseInt(bookPrice);

  //   aritmatic operation
  const amountOfDisc = (priceBook * discount) / 100;
  const amoutOfTax = (priceBook * tax) / 100;

  //   price after discount and tax;
  const priceAfterDisc = priceBook - amountOfDisc;
  const priceAfterTax = priceAfterDisc + amoutOfTax;

  // final price
  const finalPrice = priceAfterTax;

  //   using boolean, if purchasing more than 40.000 you got coupon
  const getCoupon = priceAfterTax > 40000 ? true : false;
  const coupon = getCoupon ? 'Congratulation you got a coupon!!!' : "Sorry you don't get a coupon";

  //   result

  return `Details of your purchase
      ---------------------------
      Title: ${titleBook}
      Price : Rp ${priceBook}
      Amount Of Discount : Rp ${amountOfDisc}
      Price After Discount : Rp ${priceAfterDisc}
      Amount Of Tax : Rp ${amoutOfTax}
      Price After Tax : Rp ${priceAfterTax}
      --------
      Total you have to pay is Rp ${finalPrice}
      --------
      ${coupon}`;
}

// calling function
console.log(purchasingBook('krisna', 50000, 10, 5));

// ------------------------------------------------------------
// explore
// ------------------------------------------------------------

// arrow function
const printHallo = (say) => {
  // console.log(say);
};

// printHallo('halo');

// recrisive function
function toOne(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  return toOne(n - 1);
}

// toOne(10);

for (let i = 10; i > 0; i--) {
  // console.log(i);
}

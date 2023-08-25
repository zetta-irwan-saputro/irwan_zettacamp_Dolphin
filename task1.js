// function purchasing

function purchasingBook(bookTitle = undefined, bookPrice = undefined, discount = 2, tax = 2, stock, purchase) {
  //   assignment
  const titleBook = bookTitle.toString();
  const priceBook = parseInt(bookPrice);
  const amoutOfPurchase = purchase;
  let amoutOfStock = stock;
  let remainingStock = '';
  let resultBuy = [];

  //   aritmatic operation
  const amountOfDisc = (priceBook * discount) / 100;
  const amoutOfTax = (priceBook * tax) / 100;

  //   price after discount and tax;
  const priceAfterDisc = priceBook - amountOfDisc;
  const priceAfterTax = priceAfterDisc + amoutOfTax;

  //   stock < purchase
  if (amoutOfStock < amoutOfPurchase && amoutOfStock !== 0) {
    return `we only have ${amoutOfStock} book as you want, continue to buy or not ?`;
  }

  //   check stock of purchasing using for loop
  for (let i = 0; i < amoutOfPurchase; i++) {
    // check if stock not available
    if (amoutOfStock === 0) {
      remainingStock = `Stock is Not available`;
      break;
    }

    // kurangi stock
    amoutOfStock--;
    resultBuy.push(`sucess to buy book ${i + 1}`);
    // if book available
    if (amoutOfStock > 0) {
      remainingStock = `succes to buy ${amoutOfPurchase} book`;
    }
  }

  // final price
  const finalPrice = priceAfterTax * amoutOfPurchase;

  //   using boolean, if purchasing more than 40.000 you got coupon
  const getCoupon = priceAfterTax > 40000 ? true : false;
  const coupon = getCoupon ? 'Congratulation you got a coupon!!!' : "Sorry you don't get a coupon";

  //   result and check remainigStock to retuen correct value
  if (remainingStock === 'Stock is Not available') {
    return remainingStock;
  } else {
    return `Details of your purchase
      ---------------------------
      Title: ${titleBook}
      Price : Rp ${priceBook}
      Amount Of Discount : Rp ${amountOfDisc}
      Price After Discount : Rp ${priceAfterDisc}
      Amount Of Tax : Rp ${amoutOfTax}
      Price After Tax : Rp ${priceAfterTax}
      ---------------------------
      ${resultBuy.join(', ')}
      ${remainingStock}
      Stock Of book : ${amoutOfStock}
      --------
      Total you have to pay is Rp ${finalPrice}
      --------
      ${coupon}`;
  }
}

// calling function
console.log(purchasingBook('krisna', 50000, 10, 2, 4, 4));
// title, price, disc, tax, stock, purchase

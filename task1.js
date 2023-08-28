// function purchasing

function purchasingBook(bookTitle = undefined, bookPrice = undefined, discount = 2, tax = 2, stock, purchase, credit) {
  //   assignment
  const titleBook = bookTitle.toString();
  const priceBook = parseInt(bookPrice);
  const amoutOfPurchase = purchase;
  let amoutOfStock = stock;
  let tempStock = amoutOfStock;
  let remainingStock = '';
  let resultBuy = [];
  let stockLessThanPurchase = '';
  let durationOfCredit = credit;

  //   aritmatic operation
  const amountOfDisc = (priceBook * discount) / 100;
  const amoutOfTax = (priceBook * tax) / 100;

  //   price after discount and tax;
  const priceAfterDisc = priceBook - amountOfDisc;
  const priceAfterTax = priceAfterDisc + amoutOfTax;

  //   stock < purchase
  if (amoutOfStock < amoutOfPurchase && amoutOfStock !== 0) {
    stockLessThanPurchase = 'stok less than purchase';
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

  // credit handling
  const current = new Date();
  const currentDate = current.getDate();
  const currentMonth = current.getMonth();
  const currentYear = current.getFullYear();
  const newArr = new Array(durationOfCredit).fill(0);
  let creditResult = newArr.map((a, i) => {
    let month = currentMonth + i + 1;
    let year = currentYear;

    if (month > 11) {
      month %= 12;
      year += 1;
    }
    // console.log(month);

    // converssion date
    const formattedDate = `${year} - ${month + 1} - ${currentDate}`;
    return `your credit on ${formattedDate}`;
  });

  //   result and check remainigStock to retuen correct value
  if (remainingStock === 'Stock is Not available' && stockLessThanPurchase !== 'stok less than purchase') {
    return remainingStock;
  } else if (stockLessThanPurchase === 'stok less than purchase') {
    let priceStockLessThanPurchase = priceAfterTax * tempStock;
    return `Details of your purchase
---------------------------
Title: ${titleBook}
Price : Rp ${priceBook}
Amount Of Discount : Rp ${amountOfDisc}
Price After Discount : Rp ${priceAfterDisc}
Amount Of Tax : Rp ${amoutOfTax}
Price After Tax : Rp ${priceAfterTax}
---------------------------
${resultBuy.join(', \n')}
Success to buy ${tempStock} book instead ${amoutOfPurchase} because stock is sold out 
Stock Of book : ${amoutOfStock}
--------
Total you have to pay is Rp ${priceStockLessThanPurchase}
--------
${coupon} 
----------------------------
Your Credit
----------------------------
${creditResult.join(', \n')}`;
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
${resultBuy}
${remainingStock}
Stock Of book : ${amoutOfStock}
--------
Total you have to pay is Rp ${finalPrice}
--------
${coupon}
----------------------------
Your Credit
----------------------------
${creditResult.join(', \n')}`;
  }
}

// calling function
console.log(purchasingBook('krisna', 50000, 10, 2, 7, 5, 7));
// title, price, disc, tax, stock, purchase, credit

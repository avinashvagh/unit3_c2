// Store the purchased voucher in local storage with key "purchase".
// Create a purchase.html where user will be able to see all the purchased vouchers.
// Also user should be able to see his remaining wallet balance on voucher.html and purchase.html

// For purchase.html page:-
//   -  Wallet balence id:- "wallet_balance".
//   - All the purchased voucher will be appended in div with id as "purchased_vouchers".
//   - The remaining balance will show on the page inside h3 tag with id as "balance"

let purchase = JSON.parse(localStorage.getItem("purchase"));
purchase.map((Element, index) => {
  var box = document.createElement("div");
  var name = document.createElement("h3");
  var image = document.createElement("img");
  var price = document.createElement("p");
  name.innerText = Element.name;
  image.src = Element.image;
  price.innerText = Element.price;
  box.append(name, image, price);
  document.querySelector("#purchased_vouchers").append(box);
});

// For voucher.html page :-
//   - Wallet balence id:- "wallet_balance".
//   - The voucher card will have class :- "voucher".
//   - All the vouchers will be appended inside div with id "voucher_list".
//   - Buy button will have class:- "buy_voucher"
//   - All the purchased voucher will be stored with key :- "purchase".

// Create a voucher.html page where user will see all the vouchers available, use given API to get the voucher list.
// Every voucher will have name, image, price and a buy button.
// On clicking buy button :-
//  1. If amount is sufficient, give an alert "Hurray! purchase successful" and update the amount in wallet.
//  2. If amount is insufficient, alert "Sorry! insufficient balance".

const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response[0].vouchers);
    append(response[0].vouchers);
  });
append = (data) => {
  for (let i = 0; i < data.length; i++) {
    var box = document.createElement("div");
    var name = document.createElement("h3");
    var image = document.createElement("img");
    var price = document.createElement("p");
    var buy = document.createElement("button");
    name.innerText = data[i].name;
    image.src = data[i].image;
    price.innerText = data[i].price;
    buy.innerText = "Buy";

    buy.setAttribute = ("class", "buy_voucher");
    buy.addEventListener("click", function () {
      buying_items(data[i]);
    });
    box.append(name, image, price, buy);
    document.querySelector("#voucher_list").append(box);
  }
};

buying_items = (data) => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user.wallet >= data.price) {
    user.wallet -= data.price;
    localStorage.setItem("user", JSON.stringify(user));
    alert("Hurray! purchase successful");
    document.querySelector("#wallet_balance").innerText = user.wallet;
    var purchase = JSON.parse(localStorage.getItem("purchase"));
    if (purchase == null) {
      purchase = [];
    }
    purchase.push(data);
    localStorage.setItem("purchase", JSON.stringify(purchase));
    append_purchase();
  } else {
    alert("Sorry! insufficient balance");
  }
};

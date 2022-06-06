// On clicking submit button the user data object should be stored in local storage with key "user", as :-
// {
//  name: "String",
//  email: "String",
//  address: "String",
//  wallet: "Number"
// }

document.querySelector("#submit").addEventListener("click", function (e) {
  e.preventDefault();
  const user = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    address: document.querySelector("#address").value,
    wallet: document.querySelector("#amount").value,
  };
  localStorage.setItem("user", JSON.stringify(user));

  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#address").value = "";
  document.querySelector("#amount").value = "";
});

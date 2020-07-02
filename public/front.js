import checkLogin from "./js/api.js";

const form = document.getElementById("login");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  const { user, password } = form.elements;

  checkLogin(user.value, password.value).then(response => {
    console.log(response);
  });
});

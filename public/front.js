import {doLogin, fetchUsers} from "./js/api.js";
import render from "./js/templates.js";

const form = document.getElementById("login");
const app = document.getElementById("app");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  const { user, password } = form.elements;

  doLogin(user.value, password.value)
    .then(isLogged => {
      if (isLogged) {
        app.innerHTML = 'Loading...';
        fetchUsers().then(users => {
          app.innerHTML = render({title: 'lla',username: 'lolo', users})
        })
      }
    });
  return false;
});


let username =document.querySelector('#usersNames');
let names;
if (localStorage.getItem("username") !== null) {
    names = JSON.parse(localStorage.getItem("username"));
  }
username.innerHTML=names;
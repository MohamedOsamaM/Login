let emailInput = document.querySelector("#userEmail");
let passInput = document.querySelector("#userPass");
let link = document.querySelector("#login");
let wop_1 = document.querySelector("#wop1");
let wop_2 = document.querySelector("#wop2");
let users = [];
let showname;
if (localStorage.getItem("saveUsers") != null) {
  users = JSON.parse(localStorage.getItem("saveUsers"));
}

function userchecker(e1, e2) {
  for (i = 0; i < users.length; i++) {
    if (e1.value == users[i].email && e2.value == users[i].pass) {
      showname=users[i].id;
      localStorage.setItem('username',JSON.stringify(showname));
      return true;
    }
  }
  return false;
}
function emailchecker(e) {
  for (i = 0; i < users.length; i++) {
    if (e.value==users[i].email)
    {
      return true;
    }
    
  }
  return false;
}
link.addEventListener("click", function (e) {
  if(emailInput.value===''||passInput.value===''){
    link.previousElementSibling.classList.replace('d-none','d-block');
    link.previousElementSibling.previousElementSibling.classList.replace('d-block','d-none');
    e.preventDefault();
  }
  else if (userchecker(emailInput,passInput)==false)
  {
    link.previousElementSibling.classList.replace('d-none','d-block');
    link.previousElementSibling.previousElementSibling.classList.replace('d-block','d-none');
    e.preventDefault();
    if(emailchecker(emailInput)==true&&emailchecker(passInput)==false){
      link.previousElementSibling.classList.replace('d-block','d-none');
      link.previousElementSibling.previousElementSibling.classList.replace('d-none','d-block');
      e.preventDefault();
    }
  }
});

let nameInput = document.querySelector("#userName");
let emailInput = document.querySelector("#userEmail");
let passInput = document.querySelector("#userPass");
let btnUp = document.querySelector("#btn-signup");
let sop = document.querySelector("#successful");
let wop1 = document.querySelector("#wrong1");
let wop2 = document.querySelector("#wrong2");
let users = [];
if (localStorage.getItem("saveUsers") !== null) {
  users = JSON.parse(localStorage.getItem("saveUsers"));
}
function adding() {
  if (validator(nameInput) && validator(emailInput) && validator(passInput)) {
    let user = {
      id: nameInput.value,
      email: emailInput.value,
      pass: passInput.value,
    };
    if(email_name_checker(nameInput,emailInput)==true)
    {
      wop2.classList.remove('d-none');
      sop.classList.add("d-none");
      wop1.classList.add('d-none')
      clear();
    }
    else
    {
      users.push(user);
      localStorage.setItem("saveUsers", JSON.stringify(users));
      clear();
      sop.classList.remove("d-none");
      wop1.classList.add('d-none');
      wop2.classList.add('d-none');
    }
    
  }
  else{
    wop1.classList.remove("d-none");
    sop.classList.add("d-none");
    wop2.classList.add('d-none');
  }
}
function clear() {
  nameInput.value = null;
  emailInput.value = null;
  passInput.value = null;
  nameInput.classList.remove('is-valid');
  nameInput.classList.remove('is-invalid');
  emailInput.classList.remove('is-valid');
  emailInput.classList.remove('is-invalid');
  passInput.classList.remove('is-valid');
  passInput.classList.remove('is-invalid');
}
btnUp.addEventListener("click", function () {
  adding();
});
function validator(e) {
  let regex = {
    userName: /^[A-Z][a-z0-9_-]{2,15}$/,
    userEmail: /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
    userPass: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  };
  if (regex[e.id].test(e.value)) {
    e.classList.add("is-valid");
    e.classList.remove("is-invalid");
  } else if (e.value === "") {
    e.classList.remove("is-valid");
    e.classList.remove("is-invalid");
  } else {
    e.classList.add("is-invalid");
    e.classList.remove("is-valid");
  }
  return regex[e.id].test(e.value);
}
nameInput.addEventListener("input", function () {
  validator(this);
});
emailInput.addEventListener("input", function () {
  validator(this);
});
passInput.addEventListener("input", function () {
  validator(this);
});
function email_name_checker(e1,e2)
{
  for(let i=0;i<users.length;i++)
  {
    return e1.value==users[i].id && e2.value==users[i].email;
  }
}
let formSignIn = document.getElementById("signInForm");

let users = [];

let usersList = JSON.parse(localStorage.getItem("users"));
if (usersList) {
  users = usersList;
}

console.log(usersList);

formSignIn.onsubmit = (e) => {
  e.preventDefault();

  setTextErr("#emailErr", "");
  setTextErr("#passwordErr", "");

  let valid = true;

  let email = formSignIn.email.value;
  let password = formSignIn.password.value;

  if (!email) {
    setTextErr("#emailErr", "Email is required");
    valid = false;
  }
  if (!password) {
    setTextErr("#passwordErr", "Password is required");
    valid = false;
  }
  if (valid) {
    let success = false;
    for (let i = 0; i < users.length; i++) {
      if (email == users[i].email && password == users[i].password) {
        open("../lesson8_api/index.html", "_self");
        success = true;
        break;
      }
    }
    if(success == false) {
        alert("Email or password is incorrect");
    }
  }
};

let setTextErr = (query, content) => {
  document.querySelector(query).innerHTML = content;
};

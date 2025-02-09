let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let createAccount = document.getElementById("sign-up");
// Here Related to fetching data through the form
let storageData = [];
createAccount.addEventListener("click", (e) => {
  e.preventDefault();
  FetchData = {
    fullname: fullname.value,
    email: email.value,
    password: password.value,
  };
  if (fullname.value.length >= 3) {
    document.getElementById("errors").innerText = "";
    fullname.classList.remove("Error-input");
    if (email.value.length >= 5) {
      document.getElementById("errors").innerText = "";
      email.classList.remove("Error-input");
      if (password.value.length >= 10) {
        document.getElementById("errors").innerText = "";
        storageData.push(FetchData);
        localStorage.setItem("users", JSON.stringify(storageData));
        password.classList.remove("Error-input");
        window.location.replace("/Web-Master-Auth/index.html");
      } else {
        password.classList.add("Error-input");
        document.getElementById("errors").innerText =
          "The password must be at least 8 number";
      }
    } else {
      document.getElementById("errors").innerText =
        "Invalid email address. Please enter a valid email.";
      email.classList.add("Error-input");
    }
  } else {
    fullname.classList.add("Error-input");
    document.getElementById("errors").innerText =
      "The name must be at least 3 characters long";
  }
});

let email = document.getElementById("email-input");
let password = document.getElementById("password-input");
let CheckMail = document.getElementById("btn");
// Here the data validation is being performed
const FetchData = (e) => {
  e.preventDefault();
  let getData = JSON.parse(localStorage.getItem("users")); // Here the data has been retrieved from localStorage
  //   console.log(getData);
  if (getData.some((users) => users.email === email.value)) {
    // Here a loop was executed on the data and a comparison was made between the stored data from localStorage 
    // and the data entered by the user
    // console.log("Email Successfully");
    document.getElementById("errors").innerText = "";
    email.classList.remove("errors");
    if (getData.some((users) => users.password === password.value)) {
      // console.log("Password Succesfully");
      document.getElementById("errors").innerText = "";
      password.classList.remove("errors");
      CheckMail.classList.add("loading");
      CheckMail.disabled = true;
      setTimeout(() => { // Here after verification, the user will be redirected to the home page
        CheckMail.classList.remove("loading");
        CheckMail.disabled = false;
        window.location.href ="https://mohamed-adel0.github.io/FristTask-WebMaster/"
      }, 2000);
    } else {
      // console.log("Password Is Not Valid");
      document.getElementById("errors").innerText = "Password Is Not Valid";
      password.classList.add("errors");
    }
  } else {
    // console.log("Email Is Not Valid");
    document.getElementById("errors").innerText = "Email Is Not Valid";
    email.classList.add("errors");
  }
};
CheckMail.addEventListener("click", FetchData);

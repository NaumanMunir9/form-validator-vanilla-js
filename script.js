const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show Error message
function showError(input, message) {
  const formControl = document.querySelector(".form-control");
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show Success Message
function showSuccess(input, message) {
  const formControl = document.querySelector(".form-control");
  formControl.className = "form-control success";
}

// Event Liteners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "username is required");
  } else {
    showSuccess(username);
  }
});

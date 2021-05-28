window.addEventListener("load", () => {
  if (document.getElementById("tab-2").checked) {
    document.getElementById("login-box").style.minHeight = "800px";
  }
});

const changeFormHeight = (param) => {
  const form = document.getElementById("login-box");

  switch (param) {
    case "login":
      form.style.minHeight = "450px";
      break;

    case "register":
      form.style.minHeight = "850px";
      break;

    default:
      break;
  }
};

document
  .getElementById("tab-1")
  .addEventListener("click", () => changeFormHeight("login"));
document
  .getElementById("tab-2")
  .addEventListener("click", () => changeFormHeight("register"));

const checkPasswords = (event) => {
  const password = document.getElementById("pass-register");
  const confirmPassword = document.getElementById("pass-confirm");

  const repeatLabel = document.getElementById("repeat-password");
  const passwordLabel = document.getElementById("register-password");

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  const reset = () => {
    password.style.border = "none";
    confirmPassword.style.border = "none";
    repeatLabel.style.color = "#aaa";
    repeatLabel.innerHTML = "REPEAT PASSWORD";
    passwordLabel.style.color = "#aaa";
    passwordLabel.innerHTML = "PASSWORD";
  };

  if (!passwordRegex.test(password.value)) {
    event.preventDefault();

    password.style.border = "1px solid #f00";
    passwordLabel.style.color = "#f00";
    passwordLabel.innerHTML =
      "PASSWORD (your password must contain at least 8 characters, 1 number, 1 lowercase, 1 uppercase character and only numbers and letters!)";
    password.addEventListener("change", reset);
  } else if (password.value !== confirmPassword.value) {
    event.preventDefault();
    password.style.border = "1px solid #f00";
    confirmPassword.style.border = "1px solid #f00";

    repeatLabel.style.color = "#f00";
    repeatLabel.innerHTML = "REPEAT PASSWORD (password does not match)";

    password.addEventListener("change", reset);
    confirmPassword.addEventListener("change", reset);
  }
};

document
  .getElementById("register")
  .addEventListener("submit", (event) => checkPasswords(event));

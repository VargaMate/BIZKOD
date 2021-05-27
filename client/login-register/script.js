window.addEventListener("load", () => {
  if (document.getElementById("tab-2").checked) {
    document.getElementById("login-box").style.minHeight = "800px";
  }
});

const changeFormHeight = (param) => {
  const form = document.getElementById("login-box");

  switch (param) {
    case "login":
      form.style.minHeight = "470px";
      break;

    case "register":
      form.style.minHeight = "920px";
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

const checkPasswords = () => {
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
    password.style.border = "1px solid #f00";
    passwordLabel.style.color = "#f00";
    passwordLabel.innerHTML =
      "PASSWORD (your password must contain at least 8 characters, 1 number, 1 lowercase, 1 uppercase character and only numbers and letters!)";
    password.addEventListener("change", reset);

    return false;
  } else if (password.value !== confirmPassword.value) {
    password.style.border = "1px solid #f00";
    confirmPassword.style.border = "1px solid #f00";

    repeatLabel.style.color = "#f00";
    repeatLabel.innerHTML = "REPEAT PASSWORD (password does not match)";

    password.addEventListener("change", reset);
    confirmPassword.addEventListener("change", reset);

    return false;
  } else {
    return true;
  }
};

const login = async (event) => {
  event.preventDefault();

  const email = document.getElementById("email-login").value;
  const password = document.getElementById("pass-login").value;

  const data = {
    email,
    password,
  };

  await fetch("https://example.com/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      window.location.replace("../main/index.html");
    })
    .catch((error) => {
      document.getElementById("error-login").style.display = "block";
      console.error("Error:", error);
    });
};

const register = async (event) => {
  event.preventDefault();

  if (checkPasswords()) {
    const fName = document.getElementById("f-name").value;
    const lName = document.getElementById("l-name").value;
    const password = document.getElementById("pass-register").value;
    const email = document.getElementById("email-register").value;
    const department = document.getElementById("department").value;

    const data = {
      fName,
      lName,
      password,
      email,
      department,
    };

    await fetch("https://example.com/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("error-register").style.display = "none";
        document.getElementById("success-register").style.display = "block";
        console.log("Success:", data);
      })
      .catch((error) => {
        document.getElementById("error-register").style.display = "block";
        document.getElementById("success-register").style.display = "none";
        console.error("Error:", error);
      });
  }
};

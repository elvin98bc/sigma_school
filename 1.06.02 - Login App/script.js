function login() {
  const userNameInputed = document.getElementById("username");
  const passwordInputed = document.getElementById("password");
  const result = document.getElementById("result");

  const isCorrectUsername = userNameInputed.value === "elvin98bc";
  const isPassword = passwordInputed.value === "123";

  if (isCorrectUsername && isPassword) {
    result.innerHTML = `Welcome, ${userNameInputed.value}.`;
  } else if (isCorrectUsername) {
    result.innerHTML = "Wrong Password.";
  } else {
    result.innerHTML = "Wrong Username or Password,";
  }
}


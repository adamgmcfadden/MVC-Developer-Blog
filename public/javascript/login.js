//function to log into app
async function loginFormHandler(event) {
  event.preventDefault();

  //get username and password from form
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  //if both are filled out (and validated?)
  if (username && password) {
    //use post route to login
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    //if successful, return to dashbpard
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

//event listener for login button
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

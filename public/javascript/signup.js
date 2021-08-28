//function for signup button
async function signupFormHandler(event) {
  event.preventDefault();

  //get username, email and password from form
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  //if all three filled,
  if (username && email && password) {
    //create user using user post API
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    //if successful, return to dashboard
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

//event listener for signup button
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

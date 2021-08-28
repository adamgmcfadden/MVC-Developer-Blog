//function for logout button
async function logout() {
  //use logout post API
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  //if okay, return to homepage
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

//event listener for logout button
document.querySelector("#logout").addEventListener("click", logout);

//function to add a new post
async function newFormHandler(event) {
  event.preventDefault();

  //save post-title from form as title
  const title = document.querySelector('input[name="post-title"]').value;
  //save post text from form as post_text
  const post_text = document.getElementById("post-text").value;

  //use the post route to create a new post
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //if success, replace location with /dashboard, else alert error
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

//event listener for "create"
document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

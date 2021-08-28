// function to edit a post
async function editFormHandler(event) {
  event.preventDefault();

  //get title from form
  const title = document.querySelector('input[name="post-title"]').value.trim();
  //get id from url
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  //get post_text from form
  const post_text = document.querySelector('textarea[name="post-text"]').value;

  //update post using update post API
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      post_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //if successful. return to dashboard
  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

//event listener for edit button
document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);

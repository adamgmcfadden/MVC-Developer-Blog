//function to delete a post
async function deleteFormHandler(event) {
  event.preventDefault();

  //get id from url
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  //delete post using post delete api
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  //if successful, return to dashboard
  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

//event listener for delete post button
document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);

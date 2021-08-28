async function newPost(event) {
  event.preventDefault();

  document.location.replace("/dashboard/new-post");
}

document.querySelector("#new-post").addEventListener("click", newPost);

//function to comment on a post
async function commentFormHandler(event) {
  event.preventDefault();

  //get comment text from form
  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  // get id from url
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  //if statement (cannot post empty comment)
  if (comment_text) {
    //use comments POST API
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //if successful reload page with new comment
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

//event listener for add comment button
document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);

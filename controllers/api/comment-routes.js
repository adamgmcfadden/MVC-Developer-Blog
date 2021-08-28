//------ Dependencies -------
const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//get all comments
router.get("/", (req, res) => {
  Comment.findAll()
    //return all commentData
    .then((dbCommentData) => res.json(dbCommentData))
    //return error if error
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create new comment
router.post("/", withAuth, (req, res) => {
  Comment.create({
    //need comment_text, user_id and post_id
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id,
  })
    //post comment if successful
    .then((dbCommentData) => res.json(dbCommentData))
    //return error if error
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//delete existing comment
router.delete("/:id", withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      //if no comment with id
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
      }
      //delete selected comment
      res.json(dbCommentData);
    })
    //if error return error
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//export comment apis
module.exports = router;

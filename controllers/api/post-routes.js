//--------Import dependencies------------------
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment } = require("../../models");
//-----used where authorization required
const withAuth = require("../../utils/auth");

// get all posts
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "post_text", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    //return all posts along with id, comment_text, post_id, "user_id, "created_at"
    .then((dbPostData) => res.json(dbPostData))
    //if error, return error
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//find single post
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "post_text", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      //if user does not exist, return error 404
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      // return post by id
      res.json(dbPostData);
    })
    //if error, return error
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create new post
router.post("/", withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    post_text: req.body.post_text,
    user_id: req.session.user_id,
  })
    //return post with title and post_text + user_id (username)
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      //if error, return error
      console.log(err);
      res.status(500).json(err);
    });
});

//update existing post
router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      post_text: req.body.post_text,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      //update post title and/or post_text
      res.json(dbPostData);
    })
    //return error if error
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete existing post
router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      //delete post by id
      res.json(dbPostData);
    })
    //return error if error
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//export post apis
module.exports = router;

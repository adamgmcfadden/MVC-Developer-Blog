//---Import dependencies
const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

//get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    //return all user information (exclude password)
    .then((dbUserData) => res.json(dbUserData))
    //if error, return error
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//return single user by id
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Post,
        attributes: ["id", "title", "post_text", "created_at"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at"],
        include: {
          model: Post,
          attributes: ["title"],
        },
      },
    ],
  })
    .then((dbUserData) => {
      //if no user exists with id, return error 404
      if (!dbUserData) {
        res.status(404).json({ message: "No user with this id" });
        return;
      }
      //return user by id
      res.json(dbUserData);
    })
    //if error return error
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create new user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    //create new user with username, email and password
    .then((dbUserData) => {
      //save session when logged in
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        //create new user
        res.json(dbUserData);
      });
    })
    //if error, return error
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login with username
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbUserData) => {
    //username does not exist error
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that username!" });
      return;
    }
    //save valid passowrd as variable
    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      //return incorrect password if the case
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    //if password okay, save session and log user in
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

//end session to log out
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//update user info (not used anywhere in app)
router.put("/:id", (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete user info (not used anywhere in app)
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//export user apis
module.exports = router;

//----------Import Dependencies-----------
const router = require("express").Router();

// import all apis - user, post and comment
const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

// middleware to use apis
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

//export all apis
module.exports = router;

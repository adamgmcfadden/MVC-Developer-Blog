//-----Import Dependencies
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//user has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

//user has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
  hooks: true,
});

//post belongs to user
Post.belongsTo(User, {
  foreignKey: "user_id",
});

//post has many comment
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
  hooks: true,
});

//comment belongs to user
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
  hooks: true,
});

//comment belongs to post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
  hooks: true,
});

// Export the modules
module.exports = { User, Post, Comment };

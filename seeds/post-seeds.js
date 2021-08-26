const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas architecto ipsa excepturi aut non laudantium sequi fugit officiis optio deleniti asperiores rem eius laborum maxime blanditiis culpa, quis iste?",
    user_id: 4,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas architecto ipsa excepturi aut non laudantium sequi fugit officiis optio deleniti asperiores rem eius laborum maxime blanditiis culpa, quis iste?",
    user_id: 2,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas architecto ipsa excepturi aut non laudantium sequi fugit officiis optio deleniti asperiores rem eius laborum maxime blanditiis culpa, quis iste?",
    user_id: 3,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas architecto ipsa excepturi aut non laudantium sequi fugit officiis optio deleniti asperiores rem eius laborum maxime blanditiis culpa, quis iste?",
    user_id: 1,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas architecto ipsa excepturi aut non laudantium sequi fugit officiis optio deleniti asperiores rem eius laborum maxime blanditiis culpa, quis iste?",
    user_id: 5,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas architecto ipsa excepturi aut non laudantium sequi fugit officiis optio deleniti asperiores rem eius laborum maxime blanditiis culpa, quis iste?",
    user_id: 6,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas architecto ipsa excepturi aut non laudantium sequi fugit officiis optio deleniti asperiores rem eius laborum maxime blanditiis culpa, quis iste?",
    user_id: 1,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas architecto ipsa excepturi aut non laudantium sequi fugit officiis optio deleniti asperiores rem eius laborum maxime blanditiis culpa, quis iste?",
    user_id: 3,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas architecto ipsa excepturi aut non laudantium sequi fugit officiis optio deleniti asperiores rem eius laborum maxime blanditiis culpa, quis iste?",
    user_id: 4,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas architecto ipsa excepturi aut non laudantium sequi fugit officiis optio deleniti asperiores rem eius laborum maxime blanditiis culpa, quis iste?",
    user_id: 3,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas architecto ipsa excepturi aut non laudantium sequi fugit officiis optio deleniti asperiores rem eius laborum maxime blanditiis culpa, quis iste?",
    user_id: 2,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas architecto ipsa excepturi aut non laudantium sequi fugit officiis optio deleniti asperiores rem eius laborum maxime blanditiis culpa, quis iste?",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

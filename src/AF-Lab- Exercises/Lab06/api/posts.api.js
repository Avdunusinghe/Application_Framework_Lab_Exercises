const crypto = require("crypto");

var posts = new Map();

/*
 * @description Create New Post
 */
const createPost = ({ name, discription }) => {
  const post = {
    id: crypto.randomBytes(16).toString("hex"),
    name: name,
    discription,
    postedDate: new Date(),
  };
  posts.set(post.id, post);
};

/*
 * @description Get All Post
 */
const getPosts = () => {
  return [...posts.values()];
};

/*
 * @description Get Post by Id
 */
const getPost = (id) => {
  const post = posts.get(id);
  return post;
};

module.exports = {
  createPost,
  getPosts,
  getPost,
};

const ramdomUUID = require("crypto");

var posts = new Map();

//Create New Post
const createPost = ({ name, discription }) => {
  const post = {
    id: ramdomUUID(16).toString("hex"),
    name: name,
    discription,
    postedDate: new Date(),
  };
  posts.set(post.id, post);
};

//Get All Post
const getAllPost = () => {
  return [...posts.values()];
};

module.exports = {
  createPost,
  getAllPost,
};

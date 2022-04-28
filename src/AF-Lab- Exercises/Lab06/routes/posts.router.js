const Router = require("@koa/router");
const { createPost, getPosts, getPost } = require("../api/posts.api");
const router = new Router({
  prefix: "/post",
});

//@route GET/post
//@description get posts
router.get("/", (ctx) => {
  //const data = ctx.request.body;
  ctx.body = getPosts();
  ctx.set("context-Type", "application.json");
  ctx.status = 200;
});

//@route POST/post
//@description save posts
router.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = createPost(data);
  ctx.set("context-Type", "application.json");
  ctx.status = 201;
});

//@route GET/post/id
//@description get postById
router.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getPost(id);
  ctx.set("context-Type", "application.json");
  ctx.status = 201;
});

module.exports = router;

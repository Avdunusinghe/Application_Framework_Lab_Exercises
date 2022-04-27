const Router = require("@koa/router");

const router = new Router({
  prefix: "/post",
});

router.get("/");

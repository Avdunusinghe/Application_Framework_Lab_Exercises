//load modules
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

//load Routes
const homeRouter = require("./routes/home.router");
const postRouter = require("./routes/posts.router");

//create koa app
const app = new Koa();
app.use(bodyParser());

//define Routes
app.use(homeRouter.routes()).use(homeRouter.allowedMethods());
app.use(postRouter.routes()).use(postRouter.allowedMethods());

app.use((ctx) => {
  ctx.body = "Hello World";
});

app.listen(3000);
console.log("Application is running on port 3000");

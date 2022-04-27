const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const homeRouter = require("./routes/home.router");

const app = new Koa();
app.use(bodyParser());

app.use(homeRouter.routes()).use(homeRouter.allowedMethods());

app.use((ctx) => {
  ctx.body = "Hello World";
});

app.listen(3000);
console.log("Application is running on port 3000");

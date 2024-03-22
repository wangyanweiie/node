const express = require("express");

const loginRouterModule = require("./router/login");
const homeRouterModule = require("./router/home");

const app = express();

/**
 * 注册内置中间件
 * 解析 post 请求中的参数
 */
app.use(
  express.urlencoded({
    // post 参数，username=wyw&password=123456
    extended: false,
  })
);

/**
 * 注册应用级中间件
 */
app.use("/login", loginRouterModule);
app.use("/home", homeRouterModule);

/**
 * 监听端口
 */
app.listen(3000, () => {
  console.log("Server has started");
});

const express = require("express");

const routerModule = require("./router/index");
const loginRouterModule = require("./router/login");
const homeRouterModule = require("./router/home");

const app = express();

/**
 * 中间件
 */
function callback(request, response, next) {
  console.log("验证 Token 逻辑");
  next();
}

/**
 * 注册应用级中间件 => 挂载在 app 上
 */
app.use("/home", callback);

// 1.先匹配到 /，再在 routerModule 中匹配 /login 与 /home
// app.use("/", routerModule);

// 1.先匹配到 /api，再在 routerModule 中匹配 /login 与 /home
// app.use("/api", routerModule);

// 3.直接匹配到 /login 与 /home，再在 routerModule 中匹配
app.use("/login", loginRouterModule);
app.use("/home", homeRouterModule);

/**
 * 监听端口
 */
app.listen(3000, () => {
  console.log("Server has started");
});

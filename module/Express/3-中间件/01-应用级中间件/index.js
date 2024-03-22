const express = require("express");

/**
 * 创建一个 express 实例
 */
const app = express();

/**
 * GET 请求
 * @param {String} 路径
 * @param {Function} 回调函数，可提供多个回调函数（中间件）
 * app.get(path, callback1, callback2, ...) <=> app.get(path, [callback1, callback2, ...])
 */
app.get("/", (request, response) => {
  response.send(
    `<div>
      <h1>Hello World</h1>
    </div>
    `
  );
});

app.get("/login", (request, response) => {
  response.send({
    code: 200,
    msg: "登录页",
  });
});

/**
 * 中间件
 */
function callback(request, response, next) {
  console.log("验证 Token 逻辑");

  // 使用 next() 放行会执行下一个回调函数
  next();
}

/**
 * 注册应用级中间件 => 挂载在 app 上
 * TODO: 要注意注册中间件的位置，注册中间件之后，所有请求都会经过这个中间件
 */
// app.use(callback);
app.use("/home", callback);

app.get("/home", (request, response) => {
  response.send({
    code: 200,
    msg: "首页",
  });
});

/**
 * 监听端口
 */
app.listen(3000, () => {
  console.log("Server has started");
});

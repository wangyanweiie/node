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

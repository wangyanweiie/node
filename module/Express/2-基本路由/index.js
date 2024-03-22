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

// app.get(
//   "/home",
//   (request, response, next) => {
//     console.log("验证 Token 逻辑");
//     next();
//   },
//   (request, response) => {
//     response.send({
//       code: 200,
//       msg: "首页",
//     });
//   }
// );

function callback1(request, response, next) {
  console.log("验证 Token 逻辑");

  // 中间件传参
  response.wyw = "wyw 保存了验证结果";
  // 使用 next() 放行会执行下一个回调函数
  next();
}

function callback2(request, response) {
  console.log(response.wyw);

  response.send({
    code: 200,
    msg: "首页",
  });
}

app.get("/home", [callback1, callback2]);

/**
 * 支持字符串模式
 * : 占位
 * ? 可选
 * + 可重复 n 次
 * * 任意字符
 * ()? 括号整体可选
 */
// app.get("/ab/:id", (request, response) => {
//   response.send("占位");
// });

// app.get("/ab?cd", (request, response) => {
//   response.send("可选");
// });

// app.get("/ab+cd", (request, response) => {
//   response.send("重复");
// });

// app.get("/ab*cd", (request, response) => {
//   response.send("任意字符");
// });

// app.get("/a(bc)?de", (request, response) => {
//   response.send("括号整体可选");
// });

/**
 * 支持正则表达式
 */
app.get(/a/, (request, response) => {
  response.send("正则");
});

/**
 * 监听端口
 */
app.listen(3000, () => {
  console.log("Server has started");
});

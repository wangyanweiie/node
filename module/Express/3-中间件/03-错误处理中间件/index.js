const express = require("express");

const app = express();

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
 * 错误处理中间件
 */
function errorCallback(request, response) {
  response.status(404).send({
    code: 404,
    msg: "页面不存在",
  });
}

/**
 * 注册错误处理中间件 => 挂载在 app 上
 * TODO: 要注意注册中间件的位置，应该在最后注册
 */
app.use(errorCallback);

/**
 * 监听端口
 */
app.listen(3000, () => {
  console.log("Server has started");
});

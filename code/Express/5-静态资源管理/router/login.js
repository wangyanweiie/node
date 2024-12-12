const express = require("express");

const router = express.Router();

/**
 * 中间件
 */
function logingetCallback(request, response) {
  // 获取请求参数
  const query = request.query;
  const { username, password } = query;

  if (username === "admin" && password === "123456") {
    response.send({
      code: 200,
      msg: "登录成功 POST",
    });
  } else {
    response.send({
      code: 300,
      msg: "登录失败 GET",
    });
  }
}

function loginpostCallback(request, response) {
  // 获取请求参数，必须要使用内置中间件
  const body = request.body;
  const { username, password } = body;

  if (username === "admin" && password === "123456") {
    response.send({
      code: 200,
      msg: "登录成功 POST",
    });
  } else {
    response.send({
      code: 300,
      msg: "登录失败 POST",
    });
  }
}

/**
 * 注册路由级中间件
 */
// 响应前端的 GET 请求
router.get("/", logingetCallback);

// 响应前端的 POST 请求
router.post("/", loginpostCallback);

module.exports = router;

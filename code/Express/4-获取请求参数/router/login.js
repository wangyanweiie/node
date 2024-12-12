const express = require("express");

const router = express.Router();

/**
 * 中间件
 */
function logingetCallback(request, response) {
  // 获取请求参数
  const query = request.query;

  response.send({
    code: 200,
    msg: "GET",
  });
}

function loginpostCallback(request, response) {
  // 获取请求参数，必须要使用内置中间件
  const body = request.body;

  response.send({
    code: 200,
    msg: "POST",
  });
}

/**
 * 注册路由级中间件
 */
// 响应前端的 GET 请求
router.get("/", logingetCallback);

// 响应前端的 POST 请求
router.post("/", loginpostCallback);

module.exports = router;

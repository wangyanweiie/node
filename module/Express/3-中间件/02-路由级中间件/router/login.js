const express = require("express");

const router = express.Router();

/**
 * 中间件
 */
function loginRouteCallback(request, response) {
  response.send({
    code: 200,
    msg: "登录页",
  });
}

/**
 * 注册路由级中间件
 */
router.get("/", loginRouteCallback);

module.exports = router;

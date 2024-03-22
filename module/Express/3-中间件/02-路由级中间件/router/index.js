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

function homeRouteCallback(request, response) {
  response.send({
    code: 200,
    msg: "首页",
  });
}

/**
 * 注册路由级中间件
 */
router.get("/login", loginRouteCallback);
router.get("/home", homeRouteCallback);

module.exports = router;

const express = require("express");

const router = express.Router();

/**
 * 中间件
 */
function homeRouteCallback(request, response) {
  response.send({
    code: 200,
    msg: "首页",
  });
}

function swiperRouteCallback(request, response) {
  response.send({
    code: 200,
    msg: "首页 swiper",
  });
}

function slideRouteCallback(request, response) {
  response.send({
    code: 200,
    msg: "首页 slide",
  });
}

/**
 * 注册路由级中间件
 */
router.get("/", homeRouteCallback);
router.get("/swiper", swiperRouteCallback);
router.get("/slide", slideRouteCallback);

module.exports = router;

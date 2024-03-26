const express = require("express");

const router = express.Router();

/**
 * 中间件
 */
// function homeRouteCallback(request, response) {
//   response.send({
//     code: 200,
//     msg: "首页",
//   });
// }

// function swiperRouteCallback(request, response) {
//   response.send({
//     code: 200,
//     msg: "首页 swiper",
//   });
// }

// function slideRouteCallback(request, response) {
//   response.send({
//     code: 200,
//     msg: "首页 slide",
//   });
// }

/**
 * ejs
 */
function homeRouteCallback(request, response) {
  const list = ["姓名：小明", "性別：男", "年龄：26"];
  const template = "<i>江苏省南京市</i>";

  response.render("home", {
    list,
    template,
  });
}

/**
 * 注册路由级中间件
 */
router.get("/", homeRouteCallback);
// router.get("/swiper", swiperRouteCallback);
// router.get("/slide", slideRouteCallback);

module.exports = router;

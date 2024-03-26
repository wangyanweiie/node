var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send("respond with a resource");
  // 在浏览器添加 cookie：document.cookie = 'name=wyw'
  // 1.读取前端 cookie：req.cookies
  console.log(req.cookies);
  // 2.设置前端 cookie
  res.cookie("age", "18");

  res.send({
    name: "wyw",
  });
});

module.exports = router;

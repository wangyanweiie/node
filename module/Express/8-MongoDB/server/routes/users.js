var express = require("express");
const UserModel = require("../model/UserModel");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/**
 * 响应前端 POST 请求
 * 注册用户
 */
router.post("/user", (req, res) => {
  /**
   * 插入数据库
   * 1. 创建一个模型 (user, 限制 filed 类型), 一一对应数据库的集合 (users)
   * user.create  user.find  user.delete  user.update
   */
  const { username, password, age } = req.body;
  UserModel.create({
    username,
    password,
    age,
  }).then((data) => {
    res.send({
      status: 200,
      message: "注册成功",
    });
  });
});

/**
 * 响应前端 PUT 请求
 * 更新用户信息
 */
router.put("/user/:userId", (req, res) => {
  const { username, password, age } = req.body;

  UserModel.updateOne(
    {
      _id: req.params.userId,
    },
    {
      username,
      password,
      age,
    }
  ).then((data) => {
    res.send({
      status: 200,
      message: "更新成功",
    });
  });
});

/**
 * 响应前端 DELETE 请求
 * 删除用户
 */
router.delete("/user/:id", (req, res) => {
  UserModel.deleteOne({
    _id: req.params.id,
  }).then((data) => {
    res.send({
      status: 200,
      message: "删除成功",
    });
  });
});

/**
 * 响应前端 GET 请求
 * 查询用户
 */
router.get("/user", (req, res) => {
  const { page, limit } = req.query;

  UserModel.find({}, ["username", "age"])
    .sort({ age: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .then((data) => {
      res.send(data);
    });
});

module.exports = router;

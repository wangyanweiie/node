var express = require("express");
const UserModel = require("../model/UserModel");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/user/add", (req, res) => {
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
    });
  });
});

/**
 * 动态路由
 */
router.post("/user/update/:myid", (req, res) => {
  const { username, password, age } = req.body;

  UserModel.updateOne(
    {
      _id: req.params.myid,
    },
    {
      username,
      password,
      age,
    }
  ).then((data) => {
    res.send({
      status: 200,
    });
  });
});

router.get("/user/delete/:id", (req, res) => {
  UserModel.deleteOne({
    _id: req.params.id,
  }).then((data) => {
    res.send({
      status: 200,
    });
  });
});

router.get("/user/list", (req, res) => {
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

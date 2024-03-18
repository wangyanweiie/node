const fs = require("fs");

/**
 * 读取目录
 * @params path 目录路径
 * @params callback 回调函数 => error-first
 */
fs.readdir("./test", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

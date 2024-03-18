const fs = require("fs");

/**
 * 创建目录
 * @param {string} 目录路径
 * @param {function} callback 回调函数
 */
fs.mkdir("./test", (err) => {
  if (err && err.code === "EEXIST") {
    console.log("目录已存在");
  } else {
    console.log("目录创建成功");
  }
});

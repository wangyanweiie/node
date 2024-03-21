const fs = require("fs");

/**
 * 重命名目录
 * @param {string} 目录路径
 * @param {string} 新目录名
 * @param {function} callback 回调函数
 */
fs.rename("./test", "./test1", (err) => {
  if (err && err.code === "ENOENT") {
    console.log("目录不存在");
  } else {
    console.log("目录重命名成功");
  }
});

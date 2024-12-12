const fs = require("fs");

/**
 * 删除目录
 * @param {string} 目录路径
 * @param {function} callback 回调函数
 */
fs.rmdir("./test", (err) => {
  if (err) {
    switch (err.code) {
      case "ENOENT":
        console.log("目录不存在");
        break;
      case "ENOTEMPTY":
        console.log("目录非空");
        break;
      default:
        console.log("其他错误");
    }
  } else {
    console.log("目录删除成功");
  }
});

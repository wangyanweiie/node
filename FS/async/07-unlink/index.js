const fs = require("fs");

/**
 * 删除文件
 * @param {string} 文件路径
 * @param {function} callback 回调函数 => error-first
 */
fs.unlink("./test/file.txt", (err) => {
  if (err && err.code === "ENOENT") {
    console.log("文件不存在");
  } else {
    console.log("删除成功");
  }
});

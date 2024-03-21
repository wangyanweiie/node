const fs = require("fs");

/**
 * 读取文件
 * @param {string} 文件路径
 * @param {string} 编码格式
 * @param {function} callback 回调函数 => error-first
 */
fs.readFile("./test/file.txt", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // buffer
    console.log("buffer", res);
    console.log("utf-8", res.toString("utf-8"));
  }
});

fs.readFile("./test/file.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

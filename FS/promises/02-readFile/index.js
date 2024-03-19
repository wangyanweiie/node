const fs = require("fs").promises;

/**
 * 读取文件
 * @param {string} 文件路径
 * @param {string} 编码格式
 */
fs.readFile("./test/file.txt", "utf-8")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

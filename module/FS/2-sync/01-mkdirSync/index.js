const fs = require("fs");

/**
 * 创建目录，同步会阻塞后续代码执行
 * @param {string} 目录路径
 */
try {
  fs.mkdirSync("./test");
} catch (err) {
  if (err.code === "EEXIST") {
    console.log("目录已存在");
  }
}

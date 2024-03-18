const fs = require("fs");

/**
 * 文件覆盖写，文件未存在则创建并写入，文件已存在则覆盖写
 * @param {string} 文件路径
 * @param {string} 写入内容
 * @param {function} callback 回调函数
 */
fs.writeFile("./test/file.txt", "Hello World!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("文件覆盖写成功");
  }
});

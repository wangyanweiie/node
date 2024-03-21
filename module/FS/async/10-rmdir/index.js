const fs = require("fs");

/**
 * 读取目录
 * @param {string} 目录路径
 * @param {function} 回调函数 => error-first
 */
fs.readdir("./test", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // 删除文件
    if (res.length > 0) {
      res.forEach((item) => {
        // 异步方法，存在文件未全部删除就删除文件夹，从而发生报错的问题
        fs.unlink(`./test/${item}`, (err) => {
          if (err) {
            console.log(err);
          }
        });
      });
    }

    // 删除目录
    fs.rmdir("./test", (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});

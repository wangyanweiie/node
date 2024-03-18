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
    res.forEach((item) => {
      // 异步方法，可能会出现文件未全部删除就删除文件夹的问题
      fs.unlink(`./test/${item}`, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });

    fs.rmdir("./test", (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});

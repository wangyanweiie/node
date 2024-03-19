const fs = require("fs");

/**
 * 读取目录
 * @param {string} 目录路径
 * @param {function} 回调函数 => error-first
 */
fs.readdir("./test", (err, res) => {
  if (err) {
    switch (err.code) {
      case "ENOENT":
        console.log("目录不存在");
        break;
      default:
        console.log(err);
    }
  } else {
    // 删除文件
    if (res.length > 0) {
      res.forEach((item) => {
        // 同步方法
        try {
          fs.unlinkSync(`./test/${item}`);
        } catch (error) {
          console.log(error);
        }
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

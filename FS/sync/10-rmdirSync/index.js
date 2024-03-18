const fs = require("fs");

/**
 * 读取目录
 * @params path 目录路径
 * @params callback 回调函数 => error-first
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
    res.forEach((item) => {
      // 同步方法
      try {
        fs.unlinkSync(`./test/${item}`);
      } catch (error) {
        console.log(error);
      }
    });

    fs.rmdir("./test", (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});

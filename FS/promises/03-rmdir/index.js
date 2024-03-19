const fs = require("fs").promises;

/**
 * 读取目录
 * @param {string} 目录路径
 */
fs.readdir("./test")
  .then((res) => {
    if (res.length > 0) {
      // 删除文件
      res.forEach((item) => {
        fs.unlink(`./test/${item}`)
          .then(() => {
            console.log(`删除[${item}]文件成功`);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }

    // 删除目录
    fs.rmdir("./test").then(() => {
      console.log("目录删除成功");
    });
  })
  .catch((err) => {
    switch (err.code) {
      case "ENOENT":
        console.log("目录不存在");
        break;

      default:
        console.log(err);
    }
  });

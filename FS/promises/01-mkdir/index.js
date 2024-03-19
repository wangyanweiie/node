const fs = require("fs").promises;

/**
 * 创建目录
 * @param {string} 目录路径
 */
fs.mkdir("./test")
  .then(() => {
    console.log("目录创建成功");
  })
  .catch((err) => {
    if (err.code === "EEXIST") {
      console.log("目录已存在");
    } else {
      console.log(err);
    }
  });

const fs = require("fs");

/**
 * 创建目录
 */
fs.mkdir("./test", (err) => {
  if (err && err.code === "EEXIST") {
    console.log("目录已存在");
  } else {
    console.log("目录创建成功");
  }
});

const fs = require("fs");

/**
 * 重命名目录
 */
fs.rename("./test", "./test1", (err) => {
  if (err && err.code === "ENOENT") {
    console.log("目录不存在");
  } else {
    console.log("目录重命名成功");
  }
});

const fs = require("fs");

/**
 * 删除目录
 */
fs.rmdir("./test", (err) => {
  if (err && err.code === "ENOENT") {
    console.log("目录不存在");
  } else {
    console.log("目录删除成功");
  }
});

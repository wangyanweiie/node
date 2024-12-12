const fs = require("fs");

/**
 * 查看目录/文件信息
 * @params path 目录路径
 * @params callback 回调函数 => error-first
 */
fs.stat("./test", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("是否为文件格式", res.isFile());
    console.log("是否为目录格式", res.isDirectory());
  }
});

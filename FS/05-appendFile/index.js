const fs = require("fs");

/**
 * 文件追加写
 * 文件未存在则创建并写入，文件已存在则追加写
 */
fs.appendFile("./test/file.txt", "Hello World!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("文件追加写成功");
  }
});

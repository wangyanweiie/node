const fs = require("fs").promises;

/**
 * 读取目录
 * @param {string} 目录路径
 */
fs.readdir("./test")
  .then(async (res) => {
    // 删除文件
    const arr = res.map((item) => fs.unlink(`./test/${item}`));

    if (arr.length > 0) {
      await Promise.all(arr);
    }

    // 删除目录
    await fs.rmdir("./test");
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

const fs = require("fs");

/**
 * 可读文件流
 * @param {string} 文件路径
 * @param {string} 编码格式
 */
const rs = fs.createReadStream("./test/file.txt", "utf-8");

let result = "";

/**
 * 读取流
 */
rs.on("data", (chunk) => {
  result += chunk;
});

/**
 * 读取流结束
 */
rs.on("end", () => {
  console.log("result：", result);
});

/**
 * 读取流错误
 */
rs.on("error", (err) => {
  console.log(err);
});

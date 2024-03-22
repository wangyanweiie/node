const fs = require("fs");

/**
 * 可写文件流
 * @param {string} 文件路径
 * @param {string} 编码格式
 */
const ws = fs.createWriteStream("./test/file.txt", "utf-8");

ws.write("哈哈哈哈哈");
ws.write("呵呵呵呵呵");

ws.end();

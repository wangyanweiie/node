/**
 * crypto 模块提供通用的加密与哈希算法
 */
const crypto = require("crypto");

/**
 * Hash 算法
 * @param {string} 加密方式
 */
const hash = crypto.createHash("md5");
// const hash = crypto.createHash("sha1");

hash.update("hello world");

console.log("hex：", hash.digest("hex"));
// console.log("base64：", hash.digest("base64"));

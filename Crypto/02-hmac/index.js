const crypto = require("crypto");

/**
 * Hamc 算法
 * @param {string} 加密方式
 * @param {string} 加密密钥
 */
const hmac = crypto.createHmac("md5", "wyw");
// const hmac = crypto.createHmac("sha1", "wyw");
// const hmac = crypto.createHmac("sha256", "wyw");

hmac.update("hello world");

console.log("hex：", hmac.digest("hex"));
// console.log("base64：", hmac.digest("base64"));

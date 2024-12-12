const crypto = require("crypto");

/**
 * @description AES加密
 * @param key 密钥
 * @param iv 初始化向量
 * iv 是一个与密钥一起使用的随机值，提供一种方式来增加加密算法的强度，避免重复加密所带来的弱点；
 * 即使用相同密钥进行多个数据块的加密时，为每个数据块使用不同的初始化向量可以提高安全；
 * @param data 明文
 */
function encrypt(key, iv, data) {
  const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);

  // 加密
  let encrypted = cipher.update(data, "utf8", "hex");

  // 使用 cipher.final() 方法完成加密
  encrypted += cipher.final("hex");

  // 返回加密后的数据
  return encrypted;
}

/**
 * @description AES解密
 * @param key 密钥
 * @param iv 初始化向量
 * @param data 明文
 */
function decrypt(key, iv, data) {
  const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);

  // 解密
  let decrypted = decipher.update(data, "hex", "utf8");

  // 使用 decipher.final() 方法完成解密
  decrypted += decipher.final("utf8");

  // 返回解密后的数据
  return decrypted;
}

const key = "1234567890123456";
const iv = "1234561234567890";
const originData = "wangyanwei";

const encryptResult = encrypt(key, iv, originData);
console.log("加密结果：", encryptResult);

const decryptResult = decrypt(key, iv, encryptResult);
console.log("解密结果：", decryptResult);

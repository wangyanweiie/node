/**
 * queryString
 */
const queryString = require("querystring");

const str = "name=Jack&age=18&age=20";
const obj = {
  a: 1,
  b: 2,
  c: [3, 4, 5],
};

/**
 * 通过 queryString 格式转换
 */
console.log(queryString.parse(str));
console.log(queryString.escape(str));
console.log(queryString.stringify(obj));

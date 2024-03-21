const fs = require("fs");

/**
 * 响应处理
 * @param {*} response 响应对象
 * @param {number} status 状态码
 * @param {string} data 响应结果
 */
function handleAPIRespone(response, status, data) {
  response.writeHead(status, {
    "Content-Type": "application/json;charset=utf-8",
  });

  response.write(data);
}

/**
 * 接口表
 */
const relateAPI = {
  "/api/login": (response) => {
    handleAPIRespone(
      response,
      200,
      JSON.stringify({ code: 200, msg: "登录成功" })
    );
  },

  "/api/home": (response) => {
    handleAPIRespone(response, 200, JSON.stringify({ code: 200, msg: "首页" }));
  },
};

module.exports = relateAPI;

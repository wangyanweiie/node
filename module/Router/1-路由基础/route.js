const fs = require("fs");

/**
 * 响应处理
 * @param {*} response 响应对象
 * @param {number} status 状态码
 * @param {string} path 文件路径
 */
function handleRespone(response, status, path) {
  response.writeHead(status, {
    // 设置响应头：text/html 代码片段
    "Content-Type": "text/html;charset=utf-8",
  });

  const content = fs.readFileSync(path, "utf-8");

  response.write(content);
  response.end();
}

/**
 * 路由表
 */
const relateRoute = {
  "/login": (response) => {
    handleRespone(response, 200, "./static/login.html");
  },

  "/": (response) => {
    handleRespone(response, 200, "./static/home.html");
  },

  "/404": (response) => {
    handleRespone(response, 404, "./static/404.html");
  },
};

module.exports = relateRoute;

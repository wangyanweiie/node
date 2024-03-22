const fs = require("fs");
const path = require("path");
const mime = require("mime");

/**
 * 判断路径文件是否存在
 * @param {string} path 文件路径
 * @return {boolean} 是否存在
 */
function judgeFileIsExist(path) {
  // 判断路径是否存在
  if (!fs.existsSync(path)) {
    return false;
  }

  // 判断是否为文件
  if (!fs.statSync(path).isFile()) {
    return false;
  }

  return true;
}

/**
 * 响应处理
 * @param {*} response 响应对象
 * @param {number} status 状态码
 * @param {string} path 文件路径
 */
function handleRespone(response, status, path, type) {
  response.writeHead(status, {
    "Content-Type": `${type ? type : "text/html"};charset=utf-8`,
  });

  const content = fs.readFileSync(path, "utf-8");

  response.write(content);
  response.end();
}

/**
 * 路由表
 */
const relateRoute = {
  "/login": (request, response) => {
    handleRespone(response, 200, "./static/login.html");
  },

  "/": (request, response) => {
    handleRespone(response, 200, "./static/home.html");
  },

  "/404": (request, response) => {
    const myUrl = new URL(request.url, "http://127.0.0.1:3000");

    // 获取文件路径
    const pathname = path.join(__dirname, myUrl.pathname);
    // 获取文件后缀
    const ext = path.extname(pathname);
    // 获取文件类型
    const type = mime.getType(ext);

    // 判断路径文件是否存在
    const isExist = judgeFileIsExist(pathname);

    if (isExist) {
      handleRespone(response, 200, pathname, type);
    } else {
      handleRespone(response, 404, "./static/404.html");
    }
  },
};

module.exports = relateRoute;

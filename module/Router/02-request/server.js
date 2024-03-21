const http = require("http");

const allRoute = {};

/**
 * 合并路由
 * @param {*} route 路由对象
 */
function useRoute(route) {
  Object.assign(allRoute, route);
}

/**
 * 启动服务
 */
function handleStart() {
  // 创建服务
  const server = http.createServer();

  // 监听请求
  server.on("request", (request, response) => {
    const myUrl = new URL(request.url, "http://127.0.0.1:3000");
    const pathname = myUrl.pathname;

    try {
      allRoute[pathname](request, response);
    } catch (error) {
      allRoute["/404"](request, response);
    }

    response.end();
  });

  // 监听端口
  server.listen(3000, () => {
    console.log("Server has started");
  });
}

module.exports = {
  useRoute,
  handleStart,
};

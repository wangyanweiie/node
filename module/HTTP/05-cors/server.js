const http = require("http");
const url = require("url");

/**
 * 创建服务
 * npm install -g nodemon => 当代码改变时自动重启服务
 */
const server = http.createServer();

/**
 * 监听请求
 * @params request 请求对象
 * @params response 响应对象
 */
server.on("request", (request, response) => {
  const urlobj = url.parse(request.url, true);
  const pathname = urlobj.pathname; // 路径

  response.writeHead(200, {
    "Content-Type": "application/json;charset=utf-8",
    // 允许跨域
    "access-control-allow-origin": "*",
  });

  switch (pathname) {
    case "/api":
      const content = JSON.stringify({
        name: "wyw",
        age: 26,
        address: "南京",
        phone: "110",
        email: "wyw@163.com",
        time: new Date(),
      });

      response.end(`${content}`);
      break;

    default:
      response.end("404");
  }
});

/**
 * 监听端口
 */
server.listen(3000, () => {
  console.log("Server has started");
});

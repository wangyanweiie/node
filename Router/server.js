const http = require("http");
const fs = require("fs");

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
  const myUrl = new URL(request.url, "http://127.0.0.1:3000");
  const pathname = myUrl.pathname;

  console.log("请求路径：" + pathname);

  switch (pathname) {
    case "/favicon.ico":
      break;

    case "/login":
      response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      response.write(fs.readFileSync("./static/login.html", "utf-8"));
      break;

    case "/home":
      response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      response.write(fs.readFileSync("./static/home.html", "utf-8"));
      break;

    default:
      response.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
      response.write(fs.readFileSync("./static/404.html", "utf-8"));
      break;
  }

  // 结束
  response.end();
});

/**
 * 监听端口
 */
server.listen(3000, () => {
  console.log("服务器启动成功！");
});

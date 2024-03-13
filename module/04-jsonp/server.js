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
  const query = urlobj.query; // 参数

  switch (pathname) {
    case "/api":
      const callbackFunctionName = query.callback ?? "default";
      const callbackFunctionContent = JSON.stringify({
        name: "wyw",
        age: 26,
        address: "南京",
        phone: "110",
        email: "wyw@163.com",
        time: new Date(),
      });

      // 返回 jsonp
      response.end(`${callbackFunctionName}(${callbackFunctionContent})`);
      break;

    default:
      response.end("404");
  }
});

/**
 * 监听端口
 */
server.listen(3000, () => {
  console.log("服务器启动成功！");
});

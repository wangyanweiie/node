const http = require("http");
const https = require("https");
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
      // 作为客户端向小米有品平台发送数据
      handleHttps((data) => {
        response.end(data);
      });
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

/**
 * 请求数据
 * @params callback 回调函数 - 异步编程思想
 */
function handleHttps(callback) {
  let result = "";

  const options = {
    hostname: "m.xiaomiyoupin.com",
    port: 443,
    path: "/mtop/market/search/placeHolder",
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  const request = https.request(options, (res) => {
    // 数据接收
    res.on("data", (chunk) => {
      result += chunk;
    });

    // 数据接收完毕
    res.on("end", () => {
      callback(result);
    });
  });

  const data = [{}, { baseParam: { ypClient: 1 } }];

  request.write(JSON.stringify(data));
  request.end();
}
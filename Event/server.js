const http = require("http");
const https = require("https");
const url = require("url");
const Emitter = require("events");

let event = null;

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
      handleHttps();

      event = new Emitter();
      event.on("receiveEnd", (res) => {
        response.end(res);
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
  console.log("服务器启动成功！");
});

/**
 * 请求数据
 */
function handleHttps() {
  let result = "";

  https.get(
    "https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8D%97%E4%BA%AC&ci=55&channelId=4",
    (res) => {
      // 数据接收
      res.on("data", (chunk) => {
        result += chunk;
      });

      // 数据接收完毕
      res.on("end", () => {
        event.emit("receiveEnd", result);
      });
    }
  );
}

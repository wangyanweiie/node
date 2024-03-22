const http = require("http");
const https = require("https");
const url = require("url");
const cheerio = require("cheerio");

/**
 * 创建服务
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
      // 作为客户端向猫眼平台请求数据
      handleHttps((data) => {
        response.end(handleSpider(data));
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
 * @params response 响应对象
 * @params callback 回调函数 - 异步编程思想
 */
function handleHttps(callback) {
  let result = "";

  // 访问多次会报 302 IP 限制
  https.get("https://i.maoyan.com/", (res) => {
    // 数据接收
    res.on("data", (chunk) => {
      result += chunk;
    });

    // 数据接收完毕
    res.on("end", () => {
      console.log(result);
      callback(result);
    });
  });
}

/**
 * 处理数据
 * @param data 请求数据
 */
function handleSpider(data) {
  const $ = cheerio.load(data);

  const $movieList = $(".column.content");
  const movieList = [];

  $movieList.each((index, value) => {
    movieList.push({
      title: $(value).find(".title").text(),
      grade: $(value).find(".grade").text(),
      actor: $(value).find(".actor").text(),
    });
  });

  return JSON.stringify(movieList);
}

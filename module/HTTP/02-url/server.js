const http = require("http");
const url = require("url");

const renderModule = require("../common/module");

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
  // 解析 url => parse 旧版 API
  // const urlobj = url.parse(request.url, true);
  // const pathname = urlobj.pathname;
  // const query = urlobj.query;

  // 解析 url => new URL 新版 API
  const myUrl = new URL(request.url, "http://127.0.0.1:3000");
  const pathname = myUrl.pathname;
  const searchParams = myUrl.searchParams;
  console.log(myUrl);

  // 读取本地图标
  if (pathname === "/favicon.ico") {
    return;
  }

  // 请求头
  response.writeHead(renderModule.renderStatus(pathname), {
    "Content-Type": "text/html;charset=utf-8",
  });

  // 渲染页面
  response.write(renderModule.renderHTML(pathname));

  // 结束
  response.end();
});

/**
 * 监听端口
 */
server.listen(3000, () => {
  console.log("Server has started");
});

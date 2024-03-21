const http = require("http");
const url = require("url");

const renderModule = require("../common/module");

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
  // 解析 url => parse 旧版 API
  const urlobj = url.parse(request.url, true);
  console.log("地址对象：", urlobj);

  const pathname = urlobj.pathname;
  const query = urlobj.query;

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

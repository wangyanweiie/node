const http = require("http");
const fs = require("fs");
const zlib = require("zlib");

const server = http.createServer();
const gzip = zlib.createGzip();

/**
 * 监听请求事件
 */
server.on("request", (request, response) => {
  const readStream = fs.createReadStream("./test/file.txt");

  response.writeHead(200, {
    "Content-Type": "application/x-javascript;charset=utf-8",
    // 支持 Gzip 压缩
    "Content-Encoding": "gzip",
  });

  // 5 kb
  // readStream.pipe(response);
  // Gzip 压缩：2.7 kb
  readStream.pipe(gzip).pipe(response);
});

/**
 * 监听端口
 */
server.listen(3000, () => {
  console.log("Server has started");
});

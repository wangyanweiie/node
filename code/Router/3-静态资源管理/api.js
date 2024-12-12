/**
 * 响应处理
 * @param {*} response 响应对象
 * @param {number} status 状态码
 * @param {string} data 响应结果
 */
function handleAPIRespone(response, status, data) {
  response.writeHead(status, {
    // 设置响应头：application/json
    "Content-Type": "application/json;charset=utf-8",
  });

  response.write(data);
  response.end();
}

/**
 * 接口表
 */
const relateAPI = {
  // 登录接口 GET
  "/api/loginget": (request, response) => {
    // 获取请求参数
    const myUrl = new URL(request.url, `http://127.0.0.1`);
    const params = myUrl.searchParams;
    const username = params.get("username");
    const password = params.get("password");

    // 根据请求参数进行判断
    if (username === "admin" && password === "123456") {
      handleAPIRespone(
        response,
        200,
        JSON.stringify({ code: 200, msg: "登录成功 GET" })
      );
    } else {
      handleAPIRespone(
        response,
        300,
        JSON.stringify({ code: 300, msg: "登录失败 GET" })
      );
    }
  },

  // 登录接口 POST
  "/api/loginpost": (request, response) => {
    let result = "";

    // 获取请求参数
    request.on("data", (chunk) => {
      result += chunk;
    });

    // 数据接收完毕
    request.on("end", () => {
      const data = JSON.parse(result);
      const username = data.username;
      const password = data.password;

      // 根据请求参数进行判断
      if (username === "admin" && password === "123456") {
        handleAPIRespone(
          response,
          200,
          JSON.stringify({ code: 200, msg: "登录成功 POST" })
        );
      } else {
        handleAPIRespone(
          response,
          300,
          JSON.stringify({ code: 300, msg: "登录失败 POST" })
        );
      }
    });
  },
};

module.exports = relateAPI;

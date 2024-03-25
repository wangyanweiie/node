const express = require("express");

const loginRouterModule = require("./router/login");
const homeRouterModule = require("./router/home");

const app = express();

/**
 * 配置 ejs 引擎
 * - views 配置模板文件的存放位置
 * - view engine 配置模板引擎
 */
app.set("views", "./views");
app.set("view engine", "ejs");

/**
 * 注册内置中间件
 * 配置静态资源文件夹
 *  - http://localhost:3000/login.html
 *    http://localhost:3000/home.html
 *  - http://localhost:3000/static/404.html
 */
app.use(express.static("public"));
app.use("/static", express.static("static"));

/**
 * 注册内置中间件
 * 解析 post 请求中的参数
 * - urlencoded => 可解析 post 参数，username=wyw&password=123456
 * - json => 可解析 post 参数，{ username:"wyw", password:123456 }
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/**
 * 注册应用级中间件
 */
app.use("/login", loginRouterModule);
app.use("/home", homeRouterModule);

/**
 * 错误处理中间件
 */
function errorCallback(request, response) {
  response.status(404).send({
    code: 404,
    msg: "页面不存在",
  });
}

/**
 * 注册错误处理中间件 => 挂载在 app 上
 * 要注意注册中间件的位置，应该在最后注册
 */
app.use(errorCallback);

/**
 * 监听端口
 */
app.listen(3000, () => {
  console.log("Server has started");
});

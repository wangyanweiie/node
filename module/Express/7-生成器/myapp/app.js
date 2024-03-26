var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

/**
 * view engine setup
 * 设置模板引擎
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 日志
/**
 * 注册应用级中间件
 * - logger 日志
 * - express.json() 解析请求体
 * - express.urlencoded() 解析请求体
 * - cookieParser() 解析 cookie
 * - express.static() 设置静态资源文件夹
 */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/**
 * 注册路由级中间件
 */
app.use("/", indexRouter);
app.use("/users", usersRouter);

/**
 * catch 404 and forward to error handler
 * 注册错误处理中间件
 */
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals 上下文对象
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

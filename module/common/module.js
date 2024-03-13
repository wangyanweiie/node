/**
 * 响应状态
 */
function renderStatus(url) {
  switch (url) {
    case "/home":
    case "/detail":
      return 200;

    default:
      return 404;
  }
}

/**
 * 渲染页面
 */
function renderHTML(url) {
  switch (url) {
    case "/home":
      return `
        <html>
          <head>
            <title>home</title>
          </head>
          <body>
            <h3>主页面</h1>
          </body>
        </html>
      `;

    case "/detail":
      return `
        <html>
          <head>
            <title>detail</title>
          </head>
          <body>
            <h3>详情页面</h1>
          </body>
        </html>
      `;

    default:
      return `
        <html>
          <head>
            <title>HTTP</title>
          </head>
          <body>
            <h3>Not Found</h1>
          </body>
        </html>
      `;
  }
}

module.exports = {
  renderStatus,
  renderHTML,
};

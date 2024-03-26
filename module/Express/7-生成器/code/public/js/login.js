/**
 * 登录 GET
 */
const loginget = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("请输入用户名和密码");
    return;
  }

  // 请求后端接口
  fetch(`/login?username=${username}&password=${password}`)
    // 请求头 & readStream 流
    .then((response) => response.text())
    // 真实数据
    .then((data) => {
      // 跳转到首页
      // if (JSON.parse(data).code === 200) {
      //   location.href = "/home.html";
      // } else {
      //   alert(JSON.parse(data).msg);
      // }
      location.href = "/home";
    })
    .catch((error) => console.error(error));
};

/**
 * 登录 POST
 */
const loginpost = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("请输入用户名和密码");
    return;
  }

  // 请求后端接口
  fetch(`/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    // 请求头 & readStream 流
    .then((response) => response.text())
    // 真实数据
    .then((data) => {
      // 跳转到首页
      // if (JSON.parse(data).code === 200) {
      //   location.href = "/home.html";
      // } else {
      //   alert(JSON.parse(data).msg);
      // }
      location.href = "/home";
    })
    .catch((error) => console.error(error));
};

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
  fetch(`/api/loginget?username=${username}&password=${password}`)
    // 请求头 & readStream 流
    .then((response) => response.text())
    // 真实数据
    .then((data) => console.log(data))
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
  fetch(`/api/loginpost`, {
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
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

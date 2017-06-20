<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <title>创赢策划</title>
  <%--<link href="css/base.css" rel="stylesheet" type="text/css">--%>
  <%--<link href="css/adminLogin.css" rel="stylesheet" type="text/css">--%>
</head>
<body>
<div class="warp">
  <div class="admin">
    <h2>管理员登录</h2>
    <div class="form">
      <div class="login-warp">
        <p>
          <em>用户名</em>
          <span><input type="text" id="account"></span>
        </p>
        <p>
          <em>密　码</em>
          <span><input type="password" id="password" ></span>
        </p>
      </div>
      <div class="login-btn" id="loginBtn">
        <a href="javaScript:void(0)">登 录</a>
      </div>
    </div>
  </div>
</div>
<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/adminLogin.js"></script>
</body>
</html>

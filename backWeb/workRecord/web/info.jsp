<%@ page import="com.hf.bean.User" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <title>创赢策划</title>
  <%--<link href="css/base.css" rel="stylesheet" type="text/css">--%>
  <%--<link href="css/info.css" rel="stylesheet" type="text/css">--%>
  <script src="js/laydate/laydate.js"></script>
</head>
<body>
<div class="header">
  <%--<div class="logo">--%>
    <%--<img src="images/logo.png" width="150">--%>
  <%--</div>--%>
  <%
    User user = (User)session.getAttribute("user");
    String account;
    if(user != null){
      account = user.getAccount();
  %>
  <div class="loginOut">
    <span><%=account%></span>
    <a href="javaScript:void(0)" id="loginOut">退出</a>
  </div>
  <%
    }else{
  %>
    <script>
        window.location.href = "/index";
    </script>
  <%
    }
  %>

</div>
<div class="search">
  <div class="s-brand">
    <em>售卡品牌：</em>
    <span><input type="text" id="sellCardBrand"></span>
  </div>
  <div class="s-start">
    <em>开始日期：</em>
    <span><input class="laydate-icon" onclick="laydate()" id="startTime"></span>
  </div>
  <div class="s-end">
    <em>结束日期：</em>
    <span><input class="laydate-icon" onclick="laydate()" id="endTime"></span>
  </div>
  <div class="s-btn">
    <a href="javaScript:void(0)" id="search">搜索</a>
  </div>
  <div class="export-btn">
    <a href="javaScript:void(0)" id="exportExcel">导出 Execl</a>
  </div>
</div>
<div class="table">
  <table cellpadding="0" cellspacing="1" border="0" id="mainTable">
    <tr>
      <th>序号</th>
      <th>售卡品牌</th>
      <th>售卡日期</th>
      <th>售卡卡号</th>
      <th>售卡人</th>
      <th>售卡渠道</th>
      <th>客户姓名</th>
      <th>客户地址</th>
      <th>客户电话</th>
    </tr>
  </table>
</div>
<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/info.js"></script>
</body>
</html>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <title>创赢策划</title>
  <%--<link href="css/base.css" rel="stylesheet" type="text/css">--%>
  <%--<link href="css/index.css" rel="stylesheet" type="text/css">--%>
  <script src="js/laydate/laydate.js"></script>
</head>
<body>
<div class="warp">
  <div class="header">
    <%--<div class="logo"><img src="images/logo.png"></div>--%>
    <div class="admin-btn" id="managerBtn">
      <a href="javaScript:void(0)">管理员登录</a>
    </div>
  </div>
  <div class="mian">
    <div class="form">
      <div class="table">
        <ul>
          <li>
            <em>售卡品牌</em>
            <span><input type="text" id="sellCardBrand"></span>
          </li>
          <li>
            <em>售卡日期</em>
            <span><input class="laydate-icon" onclick="laydate()" id="recordTime"></span>
          </li>
          <li>
            <em>入场券卡号</em>
            <span><input type="text" id="ticketNum"></span>
          </li>
          <li>
            <em>售&nbsp&nbsp卡&nbsp&nbsp人</em>
            <span><input type="text" id="sellerName"></span>
          </li>
          <li>
            <em>售卡渠道</em>
            <span><input type="text" id="sellChannel"></span>
          </li>
          <li>
            <em>客户姓名</em>
            <span><input type="text" id="clientName"></span>
          </li>
          <li>
            <em>客户地址</em>
            <span><input type="text" id="clientAddress"></span>
          </li>
          <li>
            <em>客户电话</em>
            <span><input type="text" id="clientPhone"></span>
          </li>
        </ul>
      </div>
      <div class="sub-btn" id="submitBtn">
        <a href="javaScript:void(0)">提 交</a>
      </div>
    </div>
  </div>
</div>
<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/index.js"></script>
</body>
</html>

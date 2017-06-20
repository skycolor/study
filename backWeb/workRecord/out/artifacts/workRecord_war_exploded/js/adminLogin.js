!(function () {
    var account = $("#account"),
        password = $("#password"),
        loginBtn = $("#loginBtn");

    loginBtn.click(function () {
        var acctVal = account.val(),
            pswVal = password.val();

        $.ajax({
            url:"/login?account=" + acctVal + "&password=" + pswVal,
            type:"get",
            dataType:"json",
            success: function (ret) {
                var state = ret.state || 0,
                    msg = ret.message || "";
                if(state == 0){
                    alert(msg)
                }else{
                    window.location.href = "info.jsp";
                }
            },
            error: function () {
                alert("数据请求错误");
            }
        });
    });


})();
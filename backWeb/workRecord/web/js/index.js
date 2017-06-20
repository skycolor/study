!(function () {
    var sellCardBrand = $("#sellCardBrand"),
        recordTime = $("#recordTime"),
        ticketNum = $("#ticketNum"),
        sellerName = $("#sellerName"),
        sellChannel = $("#sellChannel"),
        clientName = $("#clientName"),
        clientAddress = $("#clientAddress"),
        clientPhone = $("#clientPhone"),
        managerBtn = $("#managerBtn"),
        submitBtn = $("#submitBtn");


    submitBtn.click(function () {
        var sellCardBrandVal = sellCardBrand.val(),
            recordTimeVal = recordTime.val(),
            ticketNumVal = ticketNum.val(),
            sellerNameVal = sellerName.val(),
            sellChannelVal = sellChannel.val(),
            clientNameVal = clientName.val(),
            clientAddressVal = clientAddress.val(),
            clientPhoneVal = clientPhone.val();

        if(func.checkIsNotNull(sellCardBrandVal)){
            alert("售卡品牌不能为空");
            return;
        }
        if(func.checkIsNotNull(recordTimeVal)){
            alert("售卡日期不能为空");
            return;
        }
        if(func.checkIsNotNull(ticketNumVal)){
            alert("入场券卡号不能为空");
            return;
        }
        if(func.checkIsNotNull(sellerNameVal)){
            alert("售卡人不能为空");
            return;
        }
        if(func.checkIsNotNull(sellChannelVal)){
            alert("售卡渠道不能为空");
            return;
        }
        if(func.checkIsNotNull(clientNameVal)){
            alert("客户姓名不能为空");
            return;
        }
        if(func.checkIsNotNull(clientAddressVal)){
            alert("客户地址不能为空");
            return;
        }
        if(func.checkIsNotNull(clientPhoneVal)){
            alert("客户电话不能为空");
            return;
        }

        var params = {
            sellCardBrand:sellCardBrandVal,
            recordTime:recordTimeVal,
            ticketNum:ticketNumVal,
            sellerName:sellerNameVal,
            sellChannel:sellChannelVal,
            clientName:clientNameVal,
            clientAddress:clientAddressVal,
            clientPhone:clientPhoneVal
        };

        $.ajax({
            url:"/saveRecord",
            data:params,
            type:"post",
            dataType:"json",
            success: function (ret) {
                var state = ret.state || 0,
                    msg = ret.message || "";
                if(state == 1){
                   func.clearAllInput();
                }
                alert(msg);
            },
            error: function () {
                alert("数据请求错误");
            }
        });

    });

    managerBtn.click(function () {
        window.location.href = "/index";
    });


    var func = {
        checkIsNotNull: function (str) {
            return (!str || str == null || str == "" || typeof str == "undefined");
        },
        clearAllInput: function () {
            sellCardBrand.val("");
            recordTime.val("");
            ticketNum.val("");
            sellerName.val("");
            sellChannel.val("");
            clientName.val("");
            clientAddress.val("");
            clientPhone.val("");
        }
    }
})();
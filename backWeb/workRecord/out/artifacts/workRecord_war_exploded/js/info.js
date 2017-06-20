!(function () {
    var loginOut = $("#loginOut"),
        startTime = $("#startTime"),
        endTime = $("#endTime"),
        sellCardBrand = $("#sellCardBrand"),
        search = $("#search"),
        exportExcel = $("#exportExcel"),mainTable = $("#mainTable");

    var func = {
        requestData: function () {
            $(".addRow").remove();
            var params = {
                startDate : startTime.val() ,
                endDate : endTime.val() ,
                sellCardBrand : sellCardBrand.val()
            };
            $.ajax({
                url:"/search",
                data:params,
                dataType:"json",
                type:"post",
                success: function (ret) {
                    var arr = ret.list,
                        buf = new Array();
                    for(var index in arr){
                        var item = arr[index];
                        buf.push("<tr class='addRow'>");
                        buf.push("<td>" + (index+1) + "</td>");
                        buf.push("<td>" + item.sellCardBrand || "" + "</td>");
                        buf.push("<td>" + item.recordTimeStr || "" + "</td>");
                        buf.push("<td>" + item.ticketNum || "" + "</td>");
                        buf.push("<td>" + item.sellerName || "" + "</td>");
                        buf.push("<td>" + item.sellChannel || "" + "</td>");
                        buf.push("<td>" + item.clientName || "" + "</td>");
                        buf.push("<td>" + item.clientAddress || "" + "</td>");
                        buf.push("<td>" + item.clientPhone || "" + "</td>");
                        buf.push("</tr>");
                    }
                    mainTable.append(buf.join(""));
                },
                error: function () {
                    alert("数据请求错误");
                }
            });
        }
    };

    func.requestData();


    search.click(function () {
        func.requestData();
    });

    loginOut.click(function () {
        $.ajax({
            url:"/loginOut",
            type:"get",
            success: function (ret) {
                window.location.href = "/index";
            },
            error: function () {
                alert("数据请求错误");
            }
        });
    });

    exportExcel.click(function () {
        window.location.href = "/export?startDate=" + startTime.val()
                + "&endDate=" + endTime.val() + "&sellCardBrand=" + sellCardBrand.val();

    });

})();
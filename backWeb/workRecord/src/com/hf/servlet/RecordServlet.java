package com.hf.servlet;

import com.google.gson.Gson;
import com.hf.bean.MainRecord;
import com.hf.bean.json.RecordJsonBean;
import com.hf.dao.MainRecordDao;
import com.hf.dao.impl.MainRecordDaoImpl;
import com.hf.util.DBUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;

/**
 * Created by hf on 15/4/17.
 */
public class RecordServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String sellCardBrand = req.getParameter("sellCardBrand");
        String recordTimeStr = req.getParameter("recordTime");
        String ticketNum = req.getParameter("ticketNum");
        String sellerName = req.getParameter("sellerName");
        String sellChannel = req.getParameter("sellChannel");
        String clientName = req.getParameter("clientName");
        String clientAddress = req.getParameter("clientAddress");
        String clientPhone = req.getParameter("clientPhone");

        Timestamp recordTime = DBUtil.stringToTimesTamp(recordTimeStr,false);

        MainRecordDao dao = new MainRecordDaoImpl();
        MainRecord bean = new MainRecord(
            clientName,
            clientPhone,
            clientAddress,
            ticketNum,
            sellerName,
            sellCardBrand,
            sellChannel,
            recordTime
        );
        res.setContentType("application/json;charset=UTF-8");
        int ret = dao.insert(bean);
        RecordJsonBean json = new RecordJsonBean();
        if(ret > 0){
            json.setMessage("添加成功");
            json.setState(1);
        }else{
            json.setMessage("添加失败");
            json.setState(0);
        }
        PrintWriter writer = res.getWriter();
        writer.write(new Gson().toJson(json, RecordJsonBean.class));
        writer.flush();
    }
}

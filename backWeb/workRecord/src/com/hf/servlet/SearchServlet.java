package com.hf.servlet;

import com.google.gson.Gson;
import com.hf.bean.MainRecord;
import com.hf.bean.json.QueryRecordJsonBean;
import com.hf.dao.MainRecordDao;
import com.hf.dao.impl.MainRecordDaoImpl;
import com.hf.util.DBUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

/**
 * Created by hf on 15/4/14.
 */
public class SearchServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String startDate = req.getParameter("startDate");
        String endDate = req.getParameter("endDate");
        String sellCardBrand = req.getParameter("sellCardBrand");

        MainRecord mainRecord = new MainRecord();
        MainRecordDao dao = new MainRecordDaoImpl();

        mainRecord.setStartTime(DBUtil.stringToTimesTamp(startDate,false));
        mainRecord.setEndTime(DBUtil.stringToTimesTamp(endDate,true));
        mainRecord.setSellCardBrand(sellCardBrand);

        List<MainRecord> list = dao.queryList(mainRecord);

        QueryRecordJsonBean retJson = new QueryRecordJsonBean(
                list.size(),
                1,
                list
        );

        res.setContentType("application/json;charset=UTF-8");
        PrintWriter writer = res.getWriter();
        writer.write(new Gson().toJson(retJson, QueryRecordJsonBean.class));
        writer.flush();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        doGet(req , res);
    }
}

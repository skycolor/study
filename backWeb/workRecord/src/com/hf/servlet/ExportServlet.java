package com.hf.servlet;
import com.hf.bean.MainRecord;
import com.hf.dao.MainRecordDao;
import com.hf.dao.impl.MainRecordDaoImpl;
import com.hf.util.DBUtil;
import com.sun.rowset.internal.Row;
import jxl.Workbook;
import jxl.read.biff.BiffException;
import jxl.write.*;
import jxl.write.Label;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;


/**
 * Created by hf on 15/4/14.
 */
public class ExportServlet extends HttpServlet {

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

        OutputStream os = null;
        try {
            res.setContentType("application/vnd.ms-excel;charset=UTF-8");
            res.addHeader("Content-Disposition","attachment;filename=workRecord.xls");
            os = res.getOutputStream();
            WritableWorkbook wwb = Workbook.createWorkbook(os);

            //新建一张表
            WritableSheet wsheet = wwb.createSheet("售卡记录表",0);
            //设置表头
            Label label = new Label(0,0,"");
            wsheet.addCell(label);
            label = new Label(0,0,"客户姓名");
            wsheet.addCell(label);
            label = new Label(1,0,"客户电话");
            wsheet.addCell(label);
            label = new Label(2,0,"客户地址");
            wsheet.addCell(label);
            label = new Label(3,0,"入场券");
            wsheet.addCell(label);
            label = new Label(4,0,"售卡人姓名");
            wsheet.addCell(label);
            label = new Label(5,0,"售卡品牌");
            wsheet.addCell(label);
            label = new Label(6,0,"售卡渠道");
            wsheet.addCell(label);
            label = new Label(7,0,"记录时间");
            wsheet.addCell(label);

            for(int index = 1; index <= list.size(); index++){
                MainRecord record = list.get(index-1);
                int colIndex = 0;
                label = new Label(colIndex++ , index , record.getClientName());
                wsheet.addCell(label);
                label = new Label(colIndex++ , index , record.getClientPhone());
                wsheet.addCell(label);
                label = new Label(colIndex++ , index , record.getClientAddress());
                wsheet.addCell(label);
                label = new Label(colIndex++ , index , record.getTicketNum());
                wsheet.addCell(label);
                label = new Label(colIndex++ , index , record.getSellerName());
                wsheet.addCell(label);
                label = new Label(colIndex++ , index , record.getSellCardBrand());
                wsheet.addCell(label);
                label = new Label(colIndex++ , index , record.getSellChannel());
                wsheet.addCell(label);
                label = new Label(colIndex++ , index , DBUtil.timesTampToString(record.getRecordTime()));
                wsheet.addCell(label);
            }
            wwb.write();
            wwb.close();
            res.flushBuffer();

        }catch (Exception e){
            e.printStackTrace();
        }finally {
            if(os != null){
                os.close();
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        doGet(req,res);
    }
}

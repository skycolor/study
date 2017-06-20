package com.hf.dao.impl;

import com.hf.bean.MainRecord;
import com.hf.dao.MainRecordDao;
import com.hf.util.DBUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by hf on 15/4/15.
 */
public class MainRecordDaoImpl implements MainRecordDao{

    @Override
    public int insert(MainRecord record) {
        int ret = 0;
        Connection con = null;
        PreparedStatement pre = null;
        ResultSet set = null;
        int maxId = 0;
        try{
            con = DBUtil.getConnection();
            String queryMaxId = "select count(*) + 1 maxId from record";
            pre = con.prepareStatement(queryMaxId);
            set = pre.executeQuery();
            if(set.next()){
                maxId = Integer.parseInt(set.getString("maxId"));
            }
            if(maxId == 0){
                return  ret;
            }
            StringBuffer insertSql = new StringBuffer();
            insertSql.append(" insert into Record(id,clientName,clientPhone,clientAddress,ticketNum,sellerName, ");
            insertSql.append(" sellCardBrand,sellChannel,recordTime) values(?,?,?, ");
            insertSql.append(" ?,?,?,?,?,?) ");
            pre = con.prepareStatement(insertSql.toString());
            pre.setInt(1, maxId);
            pre.setString(2,record.getClientName());
            pre.setString(3,record.getClientPhone());
            pre.setString(4,record.getClientAddress());
            pre.setString(5,record.getTicketNum());
            pre.setString(6,record.getSellerName());
            pre.setString(7,record.getSellCardBrand());
            pre.setString(8, record.getSellChannel());
            pre.setTimestamp(9,record.getRecordTime());
            ret = pre.executeUpdate();
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            DBUtil.closeConn(con, pre, set);
        }
        return ret;
    }

    @Override
    public List<MainRecord> queryList(MainRecord record) {
        List<MainRecord> list = new ArrayList<MainRecord>();
        Connection con = null;
        PreparedStatement pre = null;
        ResultSet set = null;
        try{
            con = DBUtil.getConnection();
            StringBuffer buf = new StringBuffer();
            buf.append(" select id,clientName,clientPhone,clientAddress,ticketNum,sellerName,");
            buf.append(" sellCardBrand,sellChannel,recordTime from record r where 1=1");
            if(record.getSellCardBrand() != null && record.getSellCardBrand().length() > 0){
                buf.append(" and r.sellCardBrand = ?");
            }
            if(record.getStartTime() != null){
                buf.append(" and r.recordTime >= ?");
            }
            if(record.getEndTime() != null){
                buf.append(" and r.recordTime <= ?");
            }
            pre = con.prepareStatement(buf.toString());
            int temp = 1;
            if(record.getSellCardBrand() != null && record.getSellCardBrand().length() > 0){
                pre.setString(temp++,record.getSellCardBrand());
            }
            if(record.getStartTime() != null){
                pre.setTimestamp(temp++,record.getStartTime());
            }
            if(record.getEndTime() != null){
                pre.setTimestamp(temp++, record.getEndTime());
            }
            set = pre.executeQuery();
            while (set.next()){
                MainRecord mainRecord = new MainRecord(
                        set.getString("clientName"),
                        set.getString("clientPhone"),
                        set.getString("clientAddress"),
                        set.getString("ticketNum"),
                        set.getString("sellerName"),
                        set.getString("sellCardBrand"),
                        set.getString("sellChannel"),
                        set.getTimestamp("recordTime")
                );
                mainRecord.setRecordTimeStr(DBUtil.timesTampToString(mainRecord.getRecordTime()));
                list.add(mainRecord);
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            DBUtil.closeConn(con,pre,set);
        }
        return list;
    }
}

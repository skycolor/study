package com.hf.util;


import java.sql.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

/**
 * Created by hf on 15/4/14.
 */
public class DBUtil {

    public static Connection getConnection(){
        Connection conn = null;
        String url = "jdbc:mysql://localhost:3306/record";
        String user = "root";
        String password = "123";
        try{
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(url, user, password);
        }catch (Exception e){
            e.printStackTrace();
        }
        return  conn;
    }

    public static void closeConn(Connection conn,PreparedStatement pre,ResultSet res){
        try{
            if(res != null){
                res.close();
                res = null;
            }
            if(pre != null){
                pre.close();
                pre = null;
            }
            if(conn != null){
                conn.close();
                conn = null;
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public static Timestamp stringToTimesTamp(String yMd,boolean isEndTime){
        if(yMd == null || yMd.length() == 0){
            return null;
        }
        Timestamp ts = new Timestamp(System.currentTimeMillis());
        StringBuffer buf = new StringBuffer();
        buf.append(yMd);
        if(isEndTime){
            buf.append(" 23:59:59");
        }else{
            buf.append(" 00:00:00");
        }
        try {
            ts = Timestamp.valueOf(buf.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ts;
    }

    public static String timesTampToString(Timestamp ts){
        if(ts == null){
            return null;
        }
        String ret = null;
        DateFormat sdf = new SimpleDateFormat("YYYY-MM-dd");
        try {
            ret = sdf.format(ts);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ret;
    }

}

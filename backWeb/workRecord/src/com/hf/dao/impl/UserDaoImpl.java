package com.hf.dao.impl;

import com.hf.bean.User;
import com.hf.dao.UserDao;
import com.hf.util.DBUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 * Created by hf on 15/4/15.
 */
public class UserDaoImpl implements UserDao{

    @Override
    public User queryByUser(User user) {
        User ret = null;
        Connection con = null;
        PreparedStatement pre = null;
        ResultSet set = null;
        String sql = "select * from User u where u.username = ? and u.password = ?";
        try{
            con = DBUtil.getConnection();
            pre = con.prepareStatement(sql);
            pre.setString(1,user.getAccount());
            pre.setString(2,user.getPassword());
            set = pre.executeQuery();
            if(set.next()){
                ret = new User(
                    set.getInt("id"),
                    set.getString("username"),
                    set.getString("password")
                );
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            DBUtil.closeConn(con,pre,set);
        }
        return ret;
    }
}

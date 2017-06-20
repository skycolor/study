package com.hf.servlet;

import com.google.gson.Gson;
import com.hf.bean.json.LoginJsonBean;
import com.hf.bean.User;
import com.hf.dao.UserDao;
import com.hf.dao.impl.UserDaoImpl;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by hf on 15/4/14.
 */
public class LoginServlet extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String account = req.getParameter("account");
        String password = req.getParameter("password");
        res.setContentType("application/json;charset=UTF-8");
        LoginJsonBean loginJsonBean = new LoginJsonBean();
        if(account == null || password == null){
            loginJsonBean.setState(0);
            loginJsonBean.setMessage("账号密码为空");
            PrintWriter writer = res.getWriter();
            writer.write(new Gson().toJson(loginJsonBean, LoginJsonBean.class));
            writer.flush();
            return;
        }
        UserDao userDao = new UserDaoImpl();
        User u = new User(account,password);
        User retUser = userDao.queryByUser(u);
        if(retUser != null && retUser.getId() > 0){
            loginJsonBean.setState(1);
            loginJsonBean.setMessage("登录成功");
            HttpSession session=req.getSession();
            session.setAttribute("user", retUser);
        }else{
            loginJsonBean.setState(0);
            loginJsonBean.setMessage("账号密码不存在");
        }
        PrintWriter writer = res.getWriter();
        writer.write(new Gson().toJson(loginJsonBean, LoginJsonBean.class));
        writer.flush();
    }


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
        System.out.print("doPost");
    }
}

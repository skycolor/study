package com.hf.bean.json;

import com.hf.bean.MainRecord;

import java.util.List;

/**
 * Created by hf on 15/4/16.
 */
public class QueryRecordJsonBean {

    private int count;
    private int state;
    private List<MainRecord> list;

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public List<MainRecord> getList() {
        return list;
    }

    public void setList(List<MainRecord> list) {
        this.list = list;
    }


    public QueryRecordJsonBean(int count, int state, List<MainRecord> list) {
        this.count = count;
        this.state = state;
        this.list = list;
    }

    public QueryRecordJsonBean() {
        super();
    }
}

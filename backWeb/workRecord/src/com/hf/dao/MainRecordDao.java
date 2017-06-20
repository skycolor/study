package com.hf.dao;

import com.hf.bean.MainRecord;

import java.util.List;

/**
 * Created by hf on 15/4/15.
 */
public interface MainRecordDao {

    public int insert(MainRecord record);

    public List<MainRecord> queryList(MainRecord record);
}

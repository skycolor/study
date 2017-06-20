package com.hf.bean;

import java.sql.Timestamp;

/**
 * Created by hf on 15/4/14.
 */
public class MainRecord {

    private String clientName;//客户姓名
    private String clientPhone;//客户电话
    private String clientAddress;//客户地址
    private String ticketNum;//入场券
    private String sellerName;//售卡人姓名
    private String sellCardBrand;//售卡品牌
    private String sellChannel;//售卡渠道
    private Timestamp recordTime;//录入时间

    private Timestamp startTime;//查询开始时间
    private Timestamp endTime;//查询结束时间
    private String recordTimeStr;//录入时间的

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getClientPhone() {
        return clientPhone;
    }

    public void setClientPhone(String clientPhone) {
        this.clientPhone = clientPhone;
    }

    public String getClientAddress() {
        return clientAddress;
    }

    public void setClientAddress(String clientAddress) {
        this.clientAddress = clientAddress;
    }

    public String getTicketNum() {
        return ticketNum;
    }

    public void setTicketNum(String ticketNum) {
        this.ticketNum = ticketNum;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public String getSellCardBrand() {
        return sellCardBrand;
    }

    public void setSellCardBrand(String sellCardBrand) {
        this.sellCardBrand = sellCardBrand;
    }

    public String getSellChannel() {
        return sellChannel;
    }

    public void setSellChannel(String sellChannel) {
        this.sellChannel = sellChannel;
    }

    public Timestamp getRecordTime() {
        return recordTime;
    }

    public void setRecordTime(Timestamp recordTime) {
        this.recordTime = recordTime;
    }

    public Timestamp getStartTime() {
        return startTime;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    public Timestamp getEndTime() {
        return endTime;
    }

    public void setEndTime(Timestamp endTime) {
        this.endTime = endTime;
    }

    public String getRecordTimeStr() {
        return recordTimeStr;
    }

    public void setRecordTimeStr(String recordTimeStr) {
        this.recordTimeStr = recordTimeStr;
    }

    public MainRecord(){
        super();
    }

    public MainRecord(String clientName, String clientPhone, String clientAddress, String ticketNum, String sellerName, String sellCardBrand, String sellChannel, Timestamp recordTime) {
        this.clientName = clientName;
        this.clientPhone = clientPhone;
        this.clientAddress = clientAddress;
        this.ticketNum = ticketNum;
        this.sellerName = sellerName;
        this.sellCardBrand = sellCardBrand;
        this.sellChannel = sellChannel;
        this.recordTime = recordTime;
    }

    public MainRecord(String clientName, String clientPhone, String clientAddress, String ticketNum, String sellerName, String sellCardBrand, String sellChannel) {
        this.clientName = clientName;
        this.clientPhone = clientPhone;
        this.clientAddress = clientAddress;
        this.ticketNum = ticketNum;
        this.sellerName = sellerName;
        this.sellCardBrand = sellCardBrand;
        this.sellChannel = sellChannel;
    }
}

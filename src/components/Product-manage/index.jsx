import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { HomeOutlined, ScheduleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import Schedule from "./Schedule-tab1";
const { TabPane } = Tabs;

const ProductManager = () => {
  function callback(key) {
    console.log(key);
  }
  return (
    <div style={{padding:'30px'}}>
      <div className="header__top p-1 d-flex justify-content-between align-items-center">
        <h1>Quản lý sản xuất</h1>
        <div className="links d-flex align-items-center">
          <div className="item d-flex align-items-center">
            <HomeOutlined className="px-2" />
            <span style={{marginRight:'10px'}}> Trang chủ</span>
          </div>
          {" >"}
          <div className="item d-flex align-items-center">
            <ScheduleOutlined className="px-2" />
            <span> Quản lý sản xuất</span>
          </div>
        </div>
      </div>
      <div className="tab-items">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Lịch sản xuất của xưởng" key="1">
            <Schedule/>
          </TabPane>
          <TabPane tab="Lịch sản xuất của công nhân" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default ProductManager;

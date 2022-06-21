import React from "react";
import "./LayoutApp.css";
import { Layout, Collapse } from "antd";

const { Content } = Layout;

const ContentComplainList = () => {
  return (
    <Content
      className="background"
      style={{
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <Collapse expandIconPosition="right">{/* <BasicInfoFrom /> */}</Collapse>
    </Content>
  );
};

export default ContentComplainList;

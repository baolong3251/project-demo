import React from "react";
import "./HeaderApp.css";
import { Layout, Button, Col, Row, Avatar, Badge, Image } from "antd";
import {
  AlignLeftOutlined,
  AlignRightOutlined,
  UserOutlined,
  BellOutlined,
  GlobalOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const HeaderApp = ({ collapsed, setCollapsed }) => {
  return (
    <Header className="headerContainer">
      <Row className="row">
        <Col className="col1">
          {React.createElement(
            collapsed ? AlignLeftOutlined : AlignRightOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <Button type="text">
            <p className="title">Complaint Listing</p>
          </Button>
        </Col>
        <Col className="col2" flex={"auto"}>
          <Row className="row1" gutter={15}>
            <Col className="contentColHeaderRight">
              <GlobalOutlined className="sizeIconGlobal" />
            </Col>
            <Col className="contentColHeaderRight thanhngo">English</Col>
            <Col className="contentColHeaderRight">
              <CaretDownOutlined className="sizeIconMenu" />
            </Col>
            <Col className="iconSizeHeader">|</Col>
            <Col className="contentColHeaderRight">
              <Badge dot={{}}>
                <BellOutlined className="iconSizeHeader" />
              </Badge>
            </Col>
            <Col className="iconSizeHeader">|</Col>
            <Col className="contentColHeaderRight">
              <Avatar
                src={
                  <Image src="https://vcdn.kenhgamevn.com/wp-content/uploads/2021/04/31235039/khoanh-khac-vi-dai-cua-luffy-0-game4v.png" />
                }
                icon={<UserOutlined className="iconSizeHeader" />}
                className="avatarUserAccount"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderApp;

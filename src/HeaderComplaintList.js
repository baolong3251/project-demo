import React, { useEffect, useState } from "react";
import "./LayoutApp.css";
import { Layout, Menu, Button, Col, Row, Space, Dropdown, Input } from "antd";
import {
  DownOutlined,
  SearchOutlined,
  ExportOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
  FrownOutlined,
  BlockOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";

const { Content } = Layout;

const HeaderComplaintList = ({ leftContent, setLeftContent }) => {
  const [users, setUsers] = useState([]);
  const [searchTextValue, setSearchTextValue] = useState("");

  const listInputSearch = [
    " Event Description",
    " OEM Supplier",
    " Complaint ID",
    " Complaint Name",
    " Product Name",
    " UPN",
  ];

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("http://10.0.106.27:3001/api/v1/users", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZSI6IlN1cGVyQWRtaW4iLCJpYXQiOjE2NTU3MTE2NjgsImV4cCI6MTY1NTc4MzY2OH0.rf09no97lq_QMUoNXwb3YMANZMhmu_QGBGlZdwMrgsA`,
        },
      });
      setUsers(response.data.data);
    };
    loadUsers();
  }, []);
  // console.log(users);

  const [filtered, setFiltered] = useState([]);

  const handleFilter = (e) => {
    const searchText = e.target.value;
    const newFilter = listInputSearch.filter((value) =>
      value.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") setFiltered([]);
    else setFiltered(newFilter);
    setSearchTextValue(searchText);
  };
  return (
    <Content
      className="background"
      style={{
        margin: "10px 10px 5px",
        padding: "10px",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <Row>
        <Col flex="3">
          <Dropdown
            overlay={
              <Menu
                items={[
                  {
                    label: "My Complaint",
                    key: "1",
                    icon: <FrownOutlined style={{ fontSize: "20px" }} />,
                  },
                  {
                    label: "Product Return",
                    key: "2",
                    icon: <BlockOutlined style={{ fontSize: "20px" }} />,
                  },
                ]}
                style={{ borderRadius: "10px" }}
              />
            }
          >
            <Button style={{ borderRadius: "10px" }}>
              <Space>
                My Complaint
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Col>
        <Col flex="7">
          <Row justify="center">
            <Col flex="auto">
              <Input
                size="middle"
                placeholder={`Search${listInputSearch}`}
                prefix={<SearchOutlined />}
                suffix={
                  <CloseCircleOutlined
                    onClick={() => {
                      setSearchTextValue("");
                      setFiltered([]);
                    }}
                  />
                }
                style={{ borderRadius: "10px" }}
                onChange={handleFilter}
                value={searchTextValue}
              />
              {filtered.length !== 0 && (
                <div
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    borderRadius: "10px",
                    border: "1px solid gray",
                    padding: "10px",
                    zIndex: "1",
                    backgroundColor: "white",
                    position: "absolute",
                  }}
                >
                  {filtered.slice(0, 10).map((value, key) => (
                    <Button
                      block
                      key={key}
                      style={{
                        width: "100%",
                        cursor: "pointer",
                        margin: "2px 0px",
                      }}
                      onClick={() => {
                        setSearchTextValue(value);
                        setFiltered([]);
                      }}
                    >
                      {value}
                    </Button>
                  ))}
                </div>
              )}
            </Col>

            <Col
              flex="200px"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="primary"
                icon={<ExportOutlined />}
                size="middle"
                style={{
                  borderRadius: "5px",
                  marginRight: "10px",
                  marginLeft: "10px",
                }}
              />
              <Button
                type="primary"
                size="middle"
                style={{ borderRadius: "5px", marginRight: "10px" }}
              >
                Copy Complaint
              </Button>
              <Button
                type="primary"
                icon={
                  leftContent ? <LeftSquareOutlined /> : <RightSquareOutlined />
                }
                size="middle"
                onClick={() => setLeftContent(!leftContent)}
                style={{ borderRadius: "5px", marginRight: "10px" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Content>
  );
};

export default HeaderComplaintList;

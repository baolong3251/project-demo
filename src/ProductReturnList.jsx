import React, { useEffect, useReducer, useState } from 'react'
import { Space, Table, Button, Col, Row, Select, Dropdown, Menu, Badge } from 'antd';
import { DownOutlined, FrownOutlined, BlockOutlined, ExportOutlined, LeftSquareOutlined } from '@ant-design/icons';
import SearchForm from './SearchForm';
import { Link } from "react-router-dom"
import "./style_tableComplaintList.css"
import moment from 'moment'
import axios from 'axios';

const { Option } = Select;
const searchPlaceHolder = "Search OEM Supllier, Complaint ID, Product Name, JPOS/CIPI, Division, Complaint Assigned To, Country"

const ProductReturnList = () => {
    const [input, setInput] = useState('')
    const [productReturns, setProductReturns] = useState([])

    useEffect(() => {
        const getProductReturns = async () => {
            const response = await axios.get("http://10.0.106.10:3001/api/v1/complaints", {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6IlFBIiwiaWF0IjoxNjU1OTU5NjMwLCJleHAiOjE2NTY2Nzk2MzB9.Zp5W7BXZqhbMMm0eg4fLLLiBxhLP_uG6vPe71JHsQM8`,
                },
            });
            setProductReturns(response.data.data.items);
        };
        
        getProductReturns();
    
    }, [])


    const columns = [
        {
            title:
                () => {
                    
                    return (
                        <div className='productReturn-title'>
                            {<>
                                <Select
                                    defaultValue="desc"
                                    value={"PR ID"}
                                    style={{
                                        color: "#4b89ad",
                                    }}
                                    bordered={false}
                                    
                                >
                                    
                                </Select>

                            </>}
                        </div>
                    )
                },
            dataIndex: 'complaint_id',
            key: 'complaint_id',
            render: (text) => <Link to={`/complaints/${text}`} className='complaintList-text' style={{ color: "#4b89ad", textDecoration: "underline", fontWeight: "500" }}>{text}</Link>,
        },
        {
            title:
                () => {
                    
                    return (
                        <div className='complaintList-title'>
                            {/* JPOS/CIPI */}

                            {<>
                                <Select
                                    defaultValue=""
                                    value={"Complaint ID"}
                                    style={{
                                        color: "#4b89ad",
                                    }}
                                    bordered={false}
                                    
                                >
                                    
                                </Select>

                            </>}
                        </div>
                    )
                },
            dataIndex: 'jpos_cipi_id',
            
            render: (text) => <div className='complaintList-text'>{text}</div>
        },
        {
            title:
                () => {
                    
                    return (
                        <div className='complaintList-title'>
                            {/* Status */}

                            {<>
                                <Select
                                    defaultValue="desc"
                                    value={"Status"}
                                    style={{
                                        color: "#4b89ad",
                                    }}
                                    bordered={false}
                                    onSelect={(value) => { value === "All" ? setComplaints(baseData) : handleSortStatus(value) }}
                                >
                                    <Option value="All">Show All</Option>
                                    <Option value="New">New</Option>
                                    <Option value="Processing">Processing</Option>
                                    <Option value="Cancelled">Cancelled</Option>
                                    <Option value="Reopen">Reopen</Option>
                                    <Option value="Closed">Closed</Option>
                                </Select>

                            </>}
                        </div>
                    )
                },
            dataIndex: 'complaint_status',
            
            render: (_, record) => (
                <>
                    <Space className='complaintList-status' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", textAlign: "left" }}>
                        <Badge
                            color={`${record.complaint_status === "New" ? 
                            "#108108" : record.complaint_status === "Closed" ? 
                            "#585858" : record.complaint_status.length > 9 ? 
                            'magenta' : record.complaint_status.length > 6 ? 
                            'red' : '#088aa1'}`} 
                            
                        />
                        <div className='complaintList-statusText'>
                            {record.complaint_status}
                        </div>
                    </Space>
                </>
            ),
        },
        {
            title:
                () => {
                    
                    return (
                        <div className='complaintList-title'>
                            {/* Division */}

                            {<>
                                <Select
                                    defaultValue="Division"
                                    value={"Division"}
                                    style={{
                                        color: "#4b89ad",
                                    }}
                                    bordered={false}
                                    onSelect={(value) => { value === "Show All" ? setComplaints(baseData) : handleSortDivision(value) }}
                                >
                                    <Option value="Show All">Show All</Option>
                                    {divisionForSort.map(division => {
                                        return(
                                            <Option key={division} value={division}>{division}</Option>
                                        )
                                    })}
                                </Select>

                            </>}
                        </div>
                    )
                },
            
            dataIndex: 'product',
            render: (_, record) => {
                return (
                    <div className='complaintList-text'>
                        {record.product.division.slice(9)}
                    </div>
                )
            },
        },
        {
            title: (<div className='complaintList-title'>Complaint Assigned To</div>),
            
            dataIndex: 'complaint_assign_to',
            render: (_, record) => {
                return (
                    <div>
                        {record.complaint_assign_to.name}
                    </div>
                )
            }
        },
        {
            title: 'Created Date',
            
            dataIndex: 'created_date',
            render: (_, record) => {
                return (
                    <div className='complaintList-text'>
                        {moment(record.created_date).format('YYYY/MM/DD')}
                    </div>
                )
            }
        },
        {
            title: (<div className='complaintList-title'>Country</div>),
            
            dataIndex: 'country_of_event',
            render: (text) => <div className='complaintList-text'>{text}</div>,
        },
        {
            title: (<div className='complaintList-title'>Product Name</div>),
            
            dataIndex: 'product',
            render: (_, record) => {
                return (
                    <div className='complaintList-text'>
                        {record.product.product_name}
                    </div>
                )
            },
        },
        {
            title: (<div className='complaintList-title'>OEM Supplier</div>),
            
            dataIndex: 'product',
            render: (_, record) => {
                return (
                    <div className='complaintList-text'>
                        {record.product.oem}
                    </div>
                )
            },
        },
        {
            title: (<div className='complaintList-title'>Product Return</div>),
            
            dataIndex: 'productReturn',
            render: (text) => <div className='complaintList-text'>{text}</div>,
        },
    ];

    return (
        <>
            <Row style={{ padding: "10px", background: "#f7f8fa", alignItems: "center" }}>
                <Col flex={4}>
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
                        <Button className='complaintList-dropDownButton' style={{ borderRadius: "10px" }}>
                            <Space>
                                <div className='complaintList-dropDownButton-text'>My Complaint</div>
                                <DownOutlined className='complaintList-dropDownButton-icon' />
                            </Space>
                        </Button>
                    </Dropdown>
                </Col>
                <Col flex={8}>
                    <div>
                        <Row style={{ alignItems: "center" }}>
                            <Col className='complaintList-searchContainer' flex={6} style={{ display: "flex", }}>
                                <SearchForm handleChange={(e) => setInput(e.target.value)} placeholder={searchPlaceHolder} />
                                <Button
                                    type="primary"
                                    icon={<ExportOutlined style={{ fontSize: "20px", }} />}
                                    size="middle"
                                    style={{
                                        borderRadius: "5px",
                                        marginRight: "10px",
                                        marginLeft: "10px",
                                        backgroundColor: "#0066cc",
                                    }}
                                />
                            </Col>
                            <Col className='complaintList-filterShowContainer' flex={2} style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Space>
                                    <Button
                                        type="primary"
                                        icon={
                                            <LeftSquareOutlined style={{ fontSize: "20px", }} />
                                        }
                                        size="middle"
                                        
                                        style={{ borderRadius: "5px", marginRight: "10px", backgroundColor: "#0066cc", }}
                                    />
                                </Space>
                            </Col>


                        </Row>
                    </div>


                </Col>

            </Row>
            <div style={{ padding: "10px" }}>
                <Table
                    pagination={{ style: { display: 'none' } }}
                    columns={columns}
                    dataSource={[...productReturns]}
                    className="tableComplaintList"
                    bordered={false}
                    style={{ border: "1px solid #f0f0f0" }}
                    rowKey="complaint_id"
                />

                {/* <div>{data[0].complaint_id}</div> */}
            </div>
        </>
    )
}

export default ProductReturnList
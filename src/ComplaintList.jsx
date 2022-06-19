import React, { useState } from 'react'
import { Space, Table, Button, Col, Row, Typography, Pagination } from 'antd';
import { LeftOutlined, RightOutlined, DownOutlined } from '@ant-design/icons';
import SearchForm from './SearchForm';
import { Link } from "react-router-dom"
import "./style_tableComplaintList.css"
import Data from "./response_1655451432472.json"
import moment from 'moment'

const ComplaintList = () => {

    const columns = [
        {
            title:
                ({ sortColumns }) => {
                    const sortedColumn = sortColumns?.find(({ column }) => column.key === "complaint_id");
                    return (
                        <div className='complaintList-title'>
                            Complaint ID

                            {sortedColumn ? (
                                sortedColumn.order === "descend" ? (
                                    <DownOutlined className='sortIcon' style={{ marginLeft: "4px", color: "#4d98d1", fontSize: "12px" }} />
                                ) : (
                                    <DownOutlined className='sortIcon' style={{ marginLeft: "4px", color: "#bfbfbf", fontSize: "12px" }} />
                                )
                            ) : <DownOutlined className='sortIcon' style={{ marginLeft: "4px", color: "#bfbfbf", fontSize: "12px" }} />}
                        </div>
                    )
                },
            dataIndex: 'complaint_id',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.complaint_id - b.complaint_id,
            sortDirections: ['descend'],
            key: 'complaint_id',
            render: (text) => <a className='complaintList-text' style={{color: "#4b89ad", textDecoration: "underline", fontWeight: "500"}}>{text}</a>,
        },
        {
            title: 
                ({ sortColumns }) => {
                    const sortedColumn = sortColumns?.find(({ column }) => column.key === "jpos_cipi_id");
                    return (
                        <div className='complaintList-title'>
                            JPOS/CIPI

                            {sortedColumn ? (
                                sortedColumn.order === "ascend" ? (
                                    <DownOutlined className='sortIcon' style={{ marginLeft: "4px", color: "#4d98d1", fontSize: "12px" }} />
                                ) : (
                                    <DownOutlined className='sortIcon' style={{ marginLeft: "4px", color: "#bfbfbf", fontSize: "12px" }} />
                                )
                            ) : <DownOutlined className='sortIcon' style={{ marginLeft: "4px", color: "#bfbfbf", fontSize: "12px" }} />}
                        </div>
                    )
                },
            dataIndex: 'jpos_cipi_id',
            key: 'jpos_cipi_id',
            
            sorter: (a, b) => a.jpos_cipi_id.length - b.jpos_cipi_id.length,
            sortDirections: ['ascend'],
            render: (text) => <div className='complaintList-text'>{text}</div>
        },
        {
            title:
                ({ sortColumns }) => {
                    const sortedColumn = sortColumns?.find(({ column }) => column.key === "complaint_status");
                    return (
                        <div className='complaintList-title'>
                            Status

                            {sortedColumn ? (
                                sortedColumn.order === "ascend" ? (
                                    <DownOutlined className='sortIcon' style={{ marginLeft: "4px", color: "#4d98d1", fontSize: "12px" }} />
                                ) : (
                                    <DownOutlined className='sortIcon' style={{ marginLeft: "4px", color: "#bfbfbf", fontSize: "12px" }} />
                                )
                            ) : <DownOutlined className='sortIcon' style={{ marginLeft: "4px", color: "#bfbfbf", fontSize: "12px" }} />}
                        </div>
                    )
                },
            dataIndex: 'complaint_status',
            key: 'complaint_status',
            
            sorter: (a, b) => a.complaint_status.length - b.complaint_status.length,
            sortDirections: ['ascend'],
            render: (_, record) => (
                <>
                    <Space className='complaintList-status' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", textAlign: "left" }}>
                        <div
                            style={{
                                color:
                                    `${record.complaint_status === "New" ? "green" : record.complaint_status.length > 6 ? '#ef00ff' : '#088aa1'}`,
                                fontSize: '20px',
                                fontWeight: "bold",
                                transform: "translate(0, -2.5px)"
                            }}
                        > 
                        •
                        </div>
                        <div className='complaintList-statusText'>
                            {record.complaint_status}
                        </div>
                    </Space>
                </>
            ),
        },
        {
            title:
                ({ sortColumns }) => {
                    const sortedColumn = sortColumns?.find(({ column }) => column.key === "product");
                    return (
                        <div className='complaintList-title'>
                            Division

                            {sortedColumn ? (
                                sortedColumn.order === "descend" ? (
                                    <DownOutlined className='sortIcon' style={{ marginLeft: "4px", color: "#4d98d1", fontSize: "12px" }} />
                                ) : (
                                    <DownOutlined className='sortIcon' style={{ marginLeft: "4px", color: "#bfbfbf", fontSize: "12px" }} />
                                )
                            ) : <DownOutlined className='sortIcon' style={{ marginLeft: "4px", color: "#bfbfbf", fontSize: "12px" }} />}
                        </div>
                    )
                },
            key: 'product',
            dataIndex: 'product',
            
            sorter: (a, b) => a.product.division.slice(9).length - b.product.division.slice(9).length,
            sortDirections: ['descend'],
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
            key: 'complaint_assign_to',
            dataIndex: 'complaint_assign_to',
        },
        {
            title: 'Created Date',
            key: 'created_date',
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
            key: 'country_of_event',
            dataIndex: 'country_of_event',
            render: (text) => <div className='complaintList-text'>{text}</div>,
        },
        {
            title: (<div className='complaintList-title'>Product Name</div>),
            key: 'product_name',
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
            key: 'oem',
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
            title: (<div className='complaintList-title'>MDV</div>),
            key: 'mdv',
            dataIndex: 'mdv',
            render: (text) => <div className='complaintList-text'>{text}</div>,
        },
        {
            title: (<div className='complaintList-title'>Product Return</div>),
            key: 'productReturn',
            dataIndex: 'productReturn',
            render: (text) => <div className='complaintList-text'>{text}</div>,
        },
        {
            title: (<div className='complaintList-title'>CRL</div>),
            key: 'crl',
            dataIndex: 'crl',
            render: (text) => <div className='complaintList-text'>{text}</div>,
        },
        {
            title: (<div className='complaintList-title'>GFE</div>),
            key: 'gfe',
            dataIndex: 'gfe',
            render: (text) => <div className='complaintList-text'>{text}</div>,
        },
    ];
    const [data, setData] = useState(
        Data.data
    );

    return (
        <>
            <Row style={{ padding: "10px", background: "#f7f8fa", alignItems: "center" }}>
                <Col flex={3}>

                </Col>
                <Col flex={7}>
                    <div>
                        <Row style={{ alignItems: "center" }}>
                            <Col flex={4}>
                                <SearchForm />
                            </Col>
                            <Col flex={3} style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Space>
                                    <div>
                                        1 - {data.length > 20 ? "20" : data.length} of {data.length}
                                    </div>
                                    <div>
                                        <Button disabled>
                                            <LeftOutlined />
                                        </Button>
                                        <Button>
                                            <RightOutlined />
                                        </Button>
                                    </div>
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
                    dataSource={data}
                    className="tableComplaintList"
                    bordered={false}
                    style={{ border: "1px solid #f0f0f0" }}
                />
            </div>
        </>
    )
}

export default ComplaintList
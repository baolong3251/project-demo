import React, { useReducer, useState } from 'react'
import { Space, Table, Tag, Button, message, Col, Row, Typography, Pagination, Switch } from 'antd';
import { DeleteTwoTone, LeftOutlined, RightOutlined, FormOutlined } from '@ant-design/icons';
import EditThing from './EditThing';
import SearchForm from './SearchForm';
import { Link } from "react-router-dom"
import "./style_tableComplaintList.css"
import Data from "./response_1655451432472.json"

const ComplaintList = () => {
    const [show, setShow] = useState(true)
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    console.log(Data.data)


    const columns = [
        {
            title: 'Complaint ID',
            dataIndex: 'complaint_id',
            key: 'complaint_id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'JPOS/CIPI',
            dataIndex: 'jpos_cipi_id',
            key: 'jpos_cipi_id',
        },
        {
            title: 'Status',
            dataIndex: 'complaint_status',
            key: 'complaint_status',
            render: (_, record) => (
                <><div style={{ textAlign: "left!important" }}>
                    <Space style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", textAlign: "left" }}><div className='dot_status'
                        style={{
                            color:
                                `${record.complaint_status === "New" ? "green" : record.complaint_status.length > 6 ? '#ef00ff' : '#088aa1'}`,
                            fontSize: '20px',
                            fontWeight: "bold",
                            transform: "translate(0, -2.5px)"
                        }}
                    > •
                    </div>
                        {record.complaint_status}
                    </Space>
                </div>
                </>
            ),
        },
        {
            title: 'Division',
            key: 'product',
            dataIndex: 'product',
            render: (_, record) => {
                return(
                    record.product.division
                )
            },
        },
        {
            title: 'Complaint Assigned To',
            key: 'complaint_assign_to',
            dataIndex: 'complaint_assign_to',
        },
        {
            title: 'Created Date',
            key: 'created_date',
            dataIndex: 'created_date',
            render: (_, record) => {
                return (
                    record.created_date //format...
                )
            }
        },
        {
            title: 'Country',
            key: 'country_of_event',
            dataIndex: 'country_of_event',
        },
        {
            title: 'Product Name',
            key: 'product',
            dataIndex: 'product',
            render: (_, record) => {
                return(
                    record.product.product_name
                )
            },
        },
        {
            title: 'OEM Supplier',
            key: 'product',
            dataIndex: 'product',
            render: (_, record) => {
                return(
                    record.product.oem
                )
            },
        },
        {
            title: 'MDV',
            key: 'mdv',
            dataIndex: 'mdv',
        },
        {
            title: 'Product Return',
            key: 'productReturn',
            dataIndex: 'productReturn',
        },
        {
            title: 'CRL',
            key: 'crl',
            dataIndex: 'crl',
        },
        {
            title: 'GFE',
            key: 'gfe',
            dataIndex: 'gfe',
        },
    ];
    const [data, setData] = useState(
        Data.data
    //     [
    //     {
    //         key: '1',
    //         complaint_id: 'OCS-0000069',
    //         jposCipi: "696969",
    //         complaint_status: 'Processing',
    //         product: {division: "PI"},
    //         cAssignedTo: "mmm",
    //         createdDate: "2022-05-19",
    //         country: "Japan",
    //         productName: "Jupiter Max",
    //         oemSupplier: "bstar demo",
    //         mdv: "",
    //         productReturn: "Shipped",
    //         crl: "In-Progress",
    //         gfe: "Open",
    //     },
    //     {
    //         key: '2',
    //         complaint_id: 'OCS-0000069',
    //         jposCipi: "696969",
    //         complaint_status: 'New',
    //         product: {division: "cc"},
    //         cAssignedTo: "mmm",
    //         createdDate: "2022-05-19",
    //         country: "Japan",
    //         productName: "Jupiter Max",
    //         oemSupplier: "bstar demo",
    //         mdv: "",
    //         productReturn: "Shipped",
    //         crl: "In-Progress",
    //         gfe: "Open",
    //     },
    //     {
    //         key: '3',
    //         complaint_id: 'OCS-0000069',
    //         jposCipi: "696969",
    //         complaint_status: 'Reopen',
    //         product: {division: "PI"},
    //         cAssignedTo: "mmm",
    //         createdDate: "2022-05-19",
    //         country: "Japan",
    //         productName: "Jupiter Max",
    //         oemSupplier: "bstar demo",
    //         mdv: "",
    //         productReturn: "Shipped",
    //         crl: "In-Progress",
    //         gfe: "Open",
    //     },
    // ]
    );

    const handleDelete = (id) => {
        var newArray = data
        newArray = newArray.filter(x => x.key != id)
        setData(newArray)
        success()
    }

    const changeData = (id, value) => {
        var newArray = data
        var objIndex = newArray.findIndex((obj => obj.key == id));
        newArray[objIndex].name = value
        setData(newArray)
        forceUpdate()
    }

    const success = () => {
        message.success('Success');
    };

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
                {/* <Button type="primary" onClick={() => setShow(!show)}>Hide</Button> */}
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
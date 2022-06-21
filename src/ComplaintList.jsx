import React, { useEffect, useReducer, useState } from 'react'
import { Space, Table, Button, Col, Row, Select, Dropdown, Menu, Badge } from 'antd';
import { DownOutlined, FrownOutlined, BlockOutlined, ExportOutlined, LeftSquareOutlined } from '@ant-design/icons';
import SearchForm from './SearchForm';
import { Link } from "react-router-dom"
import "./style_tableComplaintList.css"
import moment from 'moment'
import Data from "./response_1655718870994.json"
import axios from 'axios';

const { Option } = Select;

const ComplaintList = () => {
    const [_, forceUpdate] = useReducer(x => x + 1, 0);
    const [input, setInput] = useState('')
    const [divisionForSort, setDivsionForSort] = useState([])
    const [complaints, setComplaints] = useState(Data)
    const [data, setData] = useState(
        complaints.data
    );

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const getComplaints = async () => {
    //         const response = await axios.get("http://10.0.106.27:3001/api/v1/complaints", {
    //             headers: {
    //                 Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6IlN1cHBsaWVyIiwiaWF0IjoxNjU1NzgxNTY1LCJleHAiOjE2NTU4NTM1NjV9.N6yod8K2om0JjlaYtR-9NX0I84Blm6xF9fbobW-lWmU`,
    //             },
    //         });
    //         console.log(response)
    //         setComplaints(response.data);
    //     };

    //     const getDivisionSort = () => {
    //         const arrUniq = [...new Map(data.map(v => [v.product.division.slice(9), v])).values()]
    //         const newArray = arrUniq.map((arr) => arr.product.division.slice(9))
    //         setDivsionForSort(newArray)
    //     };

    //     getComplaints();
    //     getDivisionSort();
    // }, [])

    // useEffect(() => {
    //     if(complaints.length > 0) {
    //         setData(complaints.data)
    //     }
    // }, [complaints])

    useEffect(() => {
        const getData = () => {
            const arrUniq = [...new Map(data.map(v => [v.product.division.slice(9), v])).values()]
            const newArray = arrUniq.map((arr) => arr.product.division.slice(9))
            setDivsionForSort(newArray)
        };
        getData();
    }, [])

    const handleSortAsc = () => {
        var newArray = data
        newArray = newArray.sort((a, b) => {
            return a.complaint_id - b.complaint_id;
        })
        setData(newArray)
        forceUpdate()
    }

    const handleSortJposCipiDesc = () => {
        var newArray = data
        newArray = newArray.sort((a, b) => {
            return b.jpos_cipi_id.localeCompare(a.jpos_cipi_id);
        })
        setData(newArray)
        forceUpdate()
    }

    const handleSortJposCipiAsc = () => {
        var newArray = data
        newArray = newArray.sort((a, b) => {
            return a.jpos_cipi_id.localeCompare(b.jpos_cipi_id);
        })
        setData(newArray)
        forceUpdate()
    }

    const handleSortDesc = () => {
        var newArray = data
        newArray = newArray.sort((a, b) => {
            return b.complaint_id - a.complaint_id;
        })
        setData(newArray)
        forceUpdate()
    }

    const handleSortStatus = (value) => {
        var newArray = complaints.data
        newArray = newArray.filter((x) => x.complaint_status === value)
        setData(newArray)
        forceUpdate()
    }

    const handleSortDivision = (value) => {
        var newArray = complaints.data
        newArray = newArray.filter((x) => x.product.division.slice(9) === value)
        setData(newArray)
        forceUpdate()
    }

    useEffect(() => {


        const filteredData = complaints.data?.filter(
            (x) => x?.complaint_id?.toString().toLowerCase().includes(input.toLowerCase()) ||
                x?.product?.oem?.toLowerCase().includes(input.toLowerCase()) ||
                x?.product?.product_name?.toLowerCase().includes(input.toLowerCase()) ||
                x?.jpos_cipi_id?.toLowerCase().includes(input.toLowerCase()) ||
                x?.complaint_status?.toLowerCase().includes(input.toLowerCase()) ||
                x?.complaint_assign_to?.toLowerCase().includes(input.toLowerCase()) ||
                x?.product?.division?.slice(9)?.toLowerCase().includes(input.toLowerCase()) ||
                x?.country_of_event?.toLowerCase().includes(input.toLowerCase()) ||
                x?.productReturn?.toLowerCase().includes(input.toLowerCase())
        )
        setData(filteredData)

    }, [input])

    const columns = [
        {
            title:
                () => {
                    
                    return (
                        <div className='complaintList-title'>
                            {/* Complaint ID */}

                            {<>
                                <Select
                                    defaultValue="desc"
                                    value={"Complaint ID"}
                                    style={{
                                        color: "#4b89ad",
                                    }}
                                    bordered={false}
                                    onSelect={(value) => { value === "desc" ? handleSortDesc() : handleSortAsc() }}
                                >
                                    <Option value="desc">Desc</Option>
                                    <Option value="asc">Asc</Option>
                                </Select>

                            </>}

                        </div>
                    )
                },
            dataIndex: 'complaint_id',
            key: 'complaint_id',
            render: (text) => <a className='complaintList-text' style={{ color: "#4b89ad", textDecoration: "underline", fontWeight: "500" }}>{text}</a>,
        },
        {
            title:
                () => {
                    
                    return (
                        <div className='complaintList-title'>
                            {/* JPOS/CIPI */}

                            {<>
                                <Select
                                    defaultValue="JPOS/CIPI"
                                    value={"JPOS/CIPI"}
                                    style={{
                                        color: "#4b89ad",
                                    }}
                                    bordered={false}
                                    onSelect={(value) => { value === "desc" ? handleSortJposCipiDesc() : handleSortJposCipiAsc() }}
                                >
                                    <Option value="desc">Desc</Option>
                                    <Option value="asc">Asc</Option>
                                </Select>

                            </>}
                        </div>
                    )
                },
            dataIndex: 'jpos_cipi_id',
            key: 'jpos_cipi_id',
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
                                    onSelect={(value) => { value === "All" ? setData(complaints.data) : handleSortStatus(value) }}
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
            key: 'complaint_status',
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
                                    onSelect={(value) => { value === "Show All" ? setData(complaints.data) : handleSortDivision(value) }}
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
            key: 'product',
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
            title: (<div className='complaintList-title'>Product Return</div>),
            key: 'productReturn',
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
                                <SearchForm handleChange={(e) => setInput(e.target.value)} />
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
                    dataSource={[...data]}
                    className="tableComplaintList"
                    bordered={false}
                    style={{ border: "1px solid #f0f0f0" }}
                />

                {/* <div>{data[0].complaint_id}</div> */}
            </div>
        </>
    )
}

export default ComplaintList
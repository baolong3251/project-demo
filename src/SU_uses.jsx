import React, { useReducer, useState } from 'react'
import { Space, Table, Tag, Button, message, Col, Row, Typography, Pagination, Switch } from 'antd';
import { DeleteTwoTone, LeftOutlined, RightOutlined, FormOutlined, RedoOutlined } from '@ant-design/icons';
import EditThing from './EditThing';
import SearchForm from './SearchForm';
import { Link } from "react-router-dom"
import "./style-suUser.css"
import image from "./assets/edit-icon.png"
import { useEffect } from 'react';
import axios from 'axios';

const SU_uses = () => {
    const [show, setShow] = useState(true)
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getComplaints = async () => {
            const response = await axios.get("http://10.0.106.10:3001/api/v1/users", {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6IlFBIiwiaWF0IjoxNjU2NjQwNDgwLCJleHAiOjE2NTczNjA0ODB9.F1kIniO8Ko6aSbj8EjRY7HEoR6v4WiuXTqa4mOMEOb8`,
                },
            });
            console.log(response)
            setUsers(response.data.data);
        };
        
        getComplaints();
    
    }, [])

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };


    const columns = [
        {
            title: 'Account Name',
            dataIndex: 'username',
            key: 'username',
            render: (text) => <a className="suUsers-link">{text}</a>,
        },
        {
            title: 'OCS Account',
            dataIndex: 'ocsAccount',
            key: 'ocsAccount',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'Role',
            key: 'role',
            dataIndex: 'role',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <>
                    <Space size="middle" className='su-actions'>
                        {<Link to={`/edit`}><img src={image} style={{fontSize: "18px", display: "flex",alignItems: "center",}} /></Link>}
                        {/* {<Link to={`/edit`}><RedoOutlined style={{fontSize: "18px", color: "#004072", display: "flex",alignItems: "center", transform: "rotate(-90deg)"}} /></Link>} */}
                        <Switch className='su-actions-switch' defaultChecked onChange={onChange} />
                    </Space>
                </>
            ),
        },
    ];

    return (
        <>
            <Row style={{ padding: "10px", background: "#f7f8fa", alignItems: "center" }}>
                <Col flex={4}>

                </Col>
                <Col flex={6}>
                    <div>
                        <Row style={{ alignItems: "center" }}>
                            <Col flex={4}>
                                <SearchForm />
                            </Col>
                            <Col flex={2} style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Space>
                                    <div>
                                        1 - {users.length > 20 ? "20" : users.length} of {users.length}
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
                    dataSource={[...users]} 
                    rowKey="id"
                    className="table-SuUsers"
                />
            </div>
        </>
    )
}

export default SU_uses
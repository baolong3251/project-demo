import React, { useReducer, useState } from 'react'
import { Space, Table, Tag, Button, message, Col, Row, Typography, Pagination, Switch } from 'antd';
import { DeleteTwoTone, LeftOutlined, RightOutlined, FormOutlined } from '@ant-design/icons';
import EditThing from './EditThing';
import SearchForm from './SearchForm';
import { Link } from "react-router-dom"

const SU_uses = () => {
    const [show, setShow] = useState(true)
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };


    const columns = [
        {
            title: 'Account Name',
            dataIndex: 'accountName',
            key: 'accountName',
            render: (text) => <a>{text}</a>,
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
            title: 'Role',
            key: 'role',
            dataIndex: 'role',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <>
                    <Space size="middle">
                        {<Link to={`/edit`}><FormOutlined style={{fontSize: "18px"}} /></Link>}

                    </Space>
                </>
            ),
        },
    ];
    const [data, setData] = useState([
        {
            key: '1',
            accountName: 'John Brown',
            ocsAccount: "gi do nay no",
            email: 'gido@gmail.com',
            role: 'thing',
        },
        {
            key: '2',
            accountName: 'Ken Tata',
            ocsAccount: "gi do nay no",
            email: 'gido@gmail.com',
            role: 'thing',
        },
        {
            key: '3',
            accountName: 'Nens Nama',
            ocsAccount: "gi do nay no",
            email: 'gido@gmail.com',
            role: 'thing',
        },
    ]);

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
                <Table columns={columns} dataSource={data} />
            </div>
        </>
    )
}

export default SU_uses
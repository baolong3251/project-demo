import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ExportExcelGroupCheckBox from './ExportExcelGroupCheckBox'
import ExportExcelModal from './ExportExcelModal'
import { Space, Table, Button, Col, Row, Typography, Pagination, Select } from 'antd';
import { LeftOutlined, RightOutlined, DownOutlined } from '@ant-design/icons';
import SearchForm from './SearchForm';
import Data from "./response_1655451432472.json"
import ExportExcelComplaintsList from './ExportExcelComplaintsList'
import ProductActivity from './ProductActivity'

const TestPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [dataForExport, setDataForExport] = useState([])
    const [input, setInput] = useState('')
    const [data, setData] = useState(
        Data.data
    );

    const handleGetData = (value) => {
        // const found = value.some(r=> dataForExport.indexOf(r) >= 0)
        // if(!found){
        //     setDataForExport(dataForExport.concat(value))
        // }
        
        var arr = dataForExport.concat(value)
        // var actualArr = arr.filter(b => value.some(a => a === b))
        var actualArr = arr.filter((item, pos) => arr.indexOf(item) === pos)
        setDataForExport(actualArr)
    }

    const handleExportData = () => {
        
    }

    console.log(dataForExport)

    return (
        <div style={{background: "white"}}>
            <Row style={{ padding: "10px", background: "#f7f8fa", alignItems: "center" }}>
                <Col flex={3}>

                </Col>
                <Col flex={7}>
                    <div>
                        <Row style={{ alignItems: "center" }}>
                            <Col flex={4}>
                                <SearchForm handleChange={(e) => setInput(e.target.value)} />
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
            <Button type="primary" onClick={() => setShowModal(!showModal)}>
                Open Modal
            </Button>
            <ExportExcelComplaintsList visible={showModal} setShow={setShowModal} />
            <ProductActivity />
        </div>
    )
}

export default TestPage
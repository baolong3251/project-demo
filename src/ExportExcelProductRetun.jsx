import React from 'react'
import { Button, Card, Divider, Modal, Space, Typography } from 'antd';
import { useState } from 'react';
import { ExportOutlined } from '@ant-design/icons'
import ExportExcelCheckBox from './ExportExcelCheckBox';

const { Text } = Typography;

const ExportExcelProductRetun = ({ visible, setShow }) => {
    const [dataGroup1, setDataGroup1] = useState([])
    const [dataGroup2, setDataGroup2] = useState([])
    const [dataGroup3, setDataGroup3] = useState([])

    const groupOptions = [
        [
            "PR Status", "Product Received Date (BSC)", "Contact", "Planned-Packing Date",
            "Shipped Date To OEM", "Courier Name", "Comment", "Product Received Date (OEM)",
            "Tracking Number", "OEM Special-Task Completed Date (BSJ Only)", "OEM Supplier's Name",
        ],
        [
            "Required Action (Japan)", "Scrap Date", "Reason of Scrap", "Infectious Product?",
            "Infection Name", "Infectious Information Required? (Japan)",
        ],
        [
            "Event Description", "Event Date", "BSC Aware Date", "Product Name",
            "JPOS # (Japan) / Reference # (CIPI #)", "UPN", "Batch/Lot Number", "Serial Number",
            "Complaint ID",
        ],
    ]

    // const menuRole = {QaMenu: "QaMenu", superAdmin: "superAdmin"}
    // console.log(menuRole)
    
    const handleCancel = () => {
        setShow(false);
    };

    const handleExportData = () => {
        var data = []
        data = data.concat(dataGroup1, dataGroup2, dataGroup3)
        console.log(data)
    }

    return (
        <div>
            <Modal
                width={1300}
                title={<div style={{ color: "#2e6486" }}>Select Export Fields</div>}
                visible={visible}
                onCancel={handleCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
                footer={
                    <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                        <Button onClick={() => handleExportData()} type="primary" style={{ backgroundColor: "#00558f", borderRadius: "10px" }}><ExportOutlined style={{ fontSize: "16px" }} /> Export</Button>
                    </div>
                }
            >
                <Space direction="vertical" size="middle" style={{ display: 'flex', margin:"0", padding: "0" }}>
                    <ExportExcelCheckBox setDataGroup={setDataGroup1} options={groupOptions[0]} title={"Basic Information"} />
                    <ExportExcelCheckBox setDataGroup={setDataGroup2} options={groupOptions[1]} title={"Product Return Detail"} />
                    <ExportExcelCheckBox setDataGroup={setDataGroup3} options={groupOptions[2]} title={"Basic Complaint Information"} />
                </Space>
            </Modal>
        </div>
    )
}

export default ExportExcelProductRetun
import React from 'react'
import { Button, Card, Divider, Modal, Space, Typography } from 'antd';
import { useState } from 'react';
import { ExportOutlined } from '@ant-design/icons'
import ExportExcelCheckBox from './ExportExcelCheckBox';

const { Text } = Typography;

const ExportExcelComplaintsList = ({ visible, setShow }) => {
    const [dataGroup1, setDataGroup1] = useState([])
    const [dataGroup2, setDataGroup2] = useState([])
    const [dataGroup3, setDataGroup3] = useState([])

    const groupOptions = [
        [
            "Complaint ID", "Business Division", "JPOS/CIPI", "Complaint Assigned To",
            "Related Complaint ID", "Status", "OEM Reference Nyumber", "Product Available for Return?",
            "Reason for NO Product Return", "Country of Event", "Event Description", "CRL Requested?",
            "BSC Aware Date", "Complaint Reviewed Date (Japan)", "OEM Notification Date", "Created Date",
            "Message to QA",
        ],
        [
            "Product Name ", "Model Number", "UPN", "Catalog Number",
            "Serial Number", "OEM Supplier's Name", "Product Family", "Batch/Lot Number",
            "AR Code (Optional)", "Local Product Licence Number", "CMP# (Japan Only)", "Quantity of Product Return",
            "OEM Requirement (Japan)",
        ],
        [
            "Facility Name", "Physician's Department", "Physician's Name", "Facility Sap Code#",
            "CRL Send To", "State/Province",
        ],
        [
            "Initial Reporter Title", "Initial Reporter Name",
        ],
        [
            "BSC Reporter Information", "Manager's Name",
        ],
        [
            "Event Description in Local Language", "Event Description in English", "Physician's Comment", "Event Date",
            "Procedure Date", "Type of Procedure", "Anatomy Location", "Diagnosis or Treatment?",
            "Resolution", "Time of Event", "Where did Event Occur?", "Patient Outcome",
            "First time the unit was used?", "Reprocessed/Resterilized?", "Use Before Expiry Date?", "Inspected prior to use?",
            "Infectious Product?", "Infection Name"
        ],
        [
            "Last Name", "First Name", "Identifier", "Gender",
            "Date Of Birth", "Age at Time of Event", "Patient Is Under 18?", "Weight (kg)",
        ],
        [
            "Intended Use", "Tortuous severity", "Percentage of stenosis", "Calcification severity",
        ],
        [
            "Product Type 1", "Tortuous severity", "Percentage of stenosis", "Calcification severity",
        ],
        [
            "Intended Use", "Tortuous severity", "Percentage of stenosis", "Calcification severity",
        ],
        [
            "Intended Use", "Tortuous severity", "Percentage of stenosis", "Calcification severity",
        ],
        [
            "Intended Use", "Tortuous severity", "Percentage of stenosis", "Calcification severity",
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
        <>
            <Modal
                width={1500}
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
                    <ExportExcelCheckBox setDataGroup={setDataGroup2} options={groupOptions[1]} title={"Product Details"} />
                    <Card className='exportExcel-cardContainer'>
                        <Text style={{ color: "#2e6486" }} strong>Reporter</Text>
                        <Divider style={{ border: "none", marginBottom: "0" }} />
                        <Space direction="vertical" size="middle" style={{ display: 'flex', margin:"0", padding: "0" }}>
                            <ExportExcelCheckBox setDataGroup={setDataGroup3} options={groupOptions[2]} title={"Facility Information"} />
                            <ExportExcelCheckBox setDataGroup={setDataGroup3} options={groupOptions[3]} title={"Initial Reporter Information"} />
                            <ExportExcelCheckBox setDataGroup={setDataGroup3} options={groupOptions[4]} title={"BSC Sales Rep Information"} />
                        </Space>
                    </Card>
                    
                    <Card className='exportExcel-cardContainer'>
                        <Text style={{ color: "#2e6486" }} strong>Event Details</Text>
                        <Divider style={{ border: "none", marginBottom: "0" }} />
                        <Space direction="vertical" size="middle" style={{ display: 'flex', margin:"0", padding: "0" }}>
                            <Space direction="vertical" size="middle" style={{ display: 'flex', margin:"0", padding: "0" }}>
                                <ExportExcelCheckBox setDataGroup={setDataGroup3} options={groupOptions[5]} title={"Event Detail"} />
                                <ExportExcelCheckBox setDataGroup={setDataGroup3} options={groupOptions[6]} title={"Patient Information"} />
                                <ExportExcelCheckBox setDataGroup={setDataGroup3} options={groupOptions[7]} title={"Cardiovascular case data"} />
                            </Space>

                            <Card className='exportExcel-cardContainer'>
                                <Text style={{ color: "#2e6486" }} strong>Other Product Information</Text>
                                <Divider style={{ border: "none", marginBottom: "0" }} />
                                <Space direction="vertical" size="middle" style={{ display: 'flex', margin:"0", padding: "0" }}>
                                    <ExportExcelCheckBox setDataGroup={setDataGroup3} options={groupOptions[8]} title={"Product Type"} />
                                    <ExportExcelCheckBox setDataGroup={setDataGroup3} options={groupOptions[9]} title={"Other Product used"} />
                                    <ExportExcelCheckBox setDataGroup={setDataGroup3} options={groupOptions[10]} title={"Name of Product"} />
                                    <ExportExcelCheckBox setDataGroup={setDataGroup3} options={groupOptions[11]} title={"Status of Use"} />
                                </Space>
                            </Card>
                        </Space>
                    </Card>


                </Space>
            </Modal>
        </>
    )
}

export default ExportExcelComplaintsList
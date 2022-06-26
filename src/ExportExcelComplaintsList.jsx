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
    const [dataGroup4, setDataGroup4] = useState([])
    const [dataGroup5, setDataGroup5] = useState([])
    const [dataGroup6, setDataGroup6] = useState([])
    const [dataGroup7, setDataGroup7] = useState([])
    const [dataGroup8, setDataGroup8] = useState([])
    const [dataGroup9, setDataGroup9] = useState([])
    const [dataGroup10, setDataGroup10] = useState([])
    const [dataGroup11, setDataGroup11] = useState([])
    const [dataGroup12, setDataGroup12] = useState([])

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
            "Product Type 1", "Product Type 2", "Product Type 3", "Product Type 4",
            "Product Type 5", "Product Type 6", "Product Type 7", "Product Type 8",
        ],
        [
            "Other Product used 1", "Other Product used 2", "Other Product used 3", "Other Product used 4",
            "Other Product used 5", "Other Product used 6", "Other Product used 7", "Other Product used 8",
        ],
        [
            "Name of Product 1", "Name of Product 2", "Name of Product 3", "Name of Product 4",
            "Name of Product 5", "Name of Product 6", "Name of Product 7", "Name of Product 8",
        ],
        [
            "Status of Use 1", "Status of Use 2", "Status of Use 3", "Status of Use 4",
            "Status of Use 5", "Status of Use 6", "Status of Use 7", "Status of Use 8",
        ],
    ]

    // const menuRole = {QaMenu: "QaMenu", superAdmin: "superAdmin"}
    // console.log(menuRole)
    
    const handleCancel = () => {
        setShow(false);
    };

    const handleExportData = () => {
        var data = []
        data = data.concat(
            dataGroup1, 
            dataGroup2, 
            dataGroup3, 
            dataGroup4,
            dataGroup5,
            dataGroup6,
            dataGroup7,
            dataGroup8,
            dataGroup9,
            dataGroup10,
            dataGroup11,
            dataGroup12
        )
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
                    <ExportExcelCheckBox setDataGroup={setDataGroup2} options={groupOptions[1]} title={"Product Details"} />
                    <Card className='exportExcel-cardContainer'>
                        <Text style={{ color: "#2e6486" }} strong>Reporter</Text>
                        <Divider style={{ border: "none", marginBottom: "0" }} />
                        <Space direction="vertical" size="middle" style={{ display: 'flex', margin:"0", padding: "0" }}>
                            <ExportExcelCheckBox setDataGroup={setDataGroup3} options={groupOptions[2]} title={"Facility Information"} />
                            <ExportExcelCheckBox setDataGroup={setDataGroup4} options={groupOptions[3]} title={"Initial Reporter Information"} />
                            <ExportExcelCheckBox setDataGroup={setDataGroup5} options={groupOptions[4]} title={"BSC Sales Rep Information"} />
                        </Space>
                    </Card>
                    
                    <Card className='exportExcel-cardContainer'>
                        <Text style={{ color: "#2e6486" }} strong>Event Details</Text>
                        <Divider style={{ border: "none", marginBottom: "0" }} />
                        <Space direction="vertical" size="middle" style={{ display: 'flex', margin:"0", padding: "0" }}>
                            <Space direction="vertical" size="middle" style={{ display: 'flex', margin:"0", padding: "0" }}>
                                <ExportExcelCheckBox setDataGroup={setDataGroup6} options={groupOptions[5]} title={"Event Detail"} />
                                <ExportExcelCheckBox setDataGroup={setDataGroup7} options={groupOptions[6]} title={"Patient Information"} />
                                <ExportExcelCheckBox setDataGroup={setDataGroup8} options={groupOptions[7]} title={"Cardiovascular case data"} />
                            </Space>

                            <Card className='exportExcel-cardContainer'>
                                <Text style={{ color: "#2e6486" }} strong>Other Product Information</Text>
                                <Divider style={{ border: "none", marginBottom: "0" }} />
                                <Space direction="vertical" size="middle" style={{ display: 'flex', margin:"0", padding: "0" }}>
                                    <ExportExcelCheckBox setDataGroup={setDataGroup9} options={groupOptions[8]} title={"Product Type"} />
                                    <ExportExcelCheckBox setDataGroup={setDataGroup10} options={groupOptions[9]} title={"Other Product used"} />
                                    <ExportExcelCheckBox setDataGroup={setDataGroup11} options={groupOptions[10]} title={"Name of Product"} />
                                    <ExportExcelCheckBox setDataGroup={setDataGroup12} options={groupOptions[11]} title={"Status of Use"} />
                                </Space>
                            </Card>
                        </Space>
                    </Card>


                </Space>
            </Modal>
        </div>
    )
}

export default ExportExcelComplaintsList
import React from 'react'
import { Button, Card, Divider, Modal, Space, Typography, Spin } from 'antd';
import { useState } from 'react';
import { ExportOutlined } from '@ant-design/icons'
import ExportExcelGroupCheckBox from './ExportExcelGroupCheckBox';
import "./style-exportExcelComplaintList.css"
import enumData from "./exportExcelEnum.json"

const { Text } = Typography;
const enumExcel = enumData.data.complaint_list
const basicInformationEnum = enumExcel.basic_information
const productDetailsEnum = enumExcel.product_details
const facilityInformationEnum = enumExcel.facility_information
const initialReporterInformationEnum = enumExcel.initial_reporter_information
const bscSalesRepInformation = enumExcel.bsc_sales_rep_information
const eventDetail = enumExcel.event_detail
const patientInformation = enumExcel.patient_information
const cardiovascularCaseData = enumExcel.cardiovascular_case_data
const productType = enumExcel.product_type
const otherProductUsed = enumExcel.other_product_used
const nameOfProduct = enumExcel.name_of_product
const statusOfUse = enumExcel.status_of_use

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
    const [loading, setLoading] = useState(false)

    const groupOptions = [
        Object.keys(basicInformationEnum),
        Object.keys(productDetailsEnum),
        Object.keys(facilityInformationEnum),
        Object.keys(initialReporterInformationEnum),
        Object.keys(bscSalesRepInformation),
        Object.keys(eventDetail),
        Object.keys(patientInformation),
        Object.keys(cardiovascularCaseData),
        Object.keys(productType),
        Object.keys(otherProductUsed),
        Object.keys(nameOfProduct),
        Object.keys(statusOfUse),
    ]
    
    const handleCancel = () => {
        setShow(false);
    };

    const handleExportData = () => {
        setLoading(true)
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
        ).reduce((a, v) => ({ ...a, [v]: true}), {})
        data = {exportComplaintList: data}
        console.log(data)
        setLoading(false)
    }

    return (
        <div>
            <Modal
                width={1300}
                title={<div className='exportExcel-modalTitle'>Select Export Fields</div>}
                visible={visible}
                onCancel={handleCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
                footer={
                    <div className='exportExcel-modalFooter'>
                        <Spin spinning={loading}>
                            <Button className='exportExcel-modalButton'  onClick={() => handleExportData()} type="primary">
                                <ExportOutlined className='exportExcel-modalButton-icon' /> Export
                            </Button>
                        </Spin>
                    </div>
                }
                className="exportExcel-modal"
            >
                <Spin spinning={loading}>
                    <Space direction="vertical" size="middle" className='exportExcel-modalContainer'>
                        <ExportExcelGroupCheckBox enumData={basicInformationEnum} setDataGroup={setDataGroup1} options={groupOptions[0]} title={"Basic Information"} />
                        <ExportExcelGroupCheckBox enumData={productDetailsEnum} setDataGroup={setDataGroup2} options={groupOptions[1]} title={"Product Details"} />
                        <Card className='exportExcel-cardContainer'>
                            <Text className='exportExcel-cardText' strong>Reporter</Text>
                            <Divider className='exportExcel-cardDivider' style={{ border: "none", marginBottom: "0" }} />
                            <Space direction="vertical" size="middle" style={{ display: 'flex', margin:"0", padding: "0" }}>
                                <ExportExcelGroupCheckBox enumData={facilityInformationEnum} setDataGroup={setDataGroup3} options={groupOptions[2]} title={"Facility Information"} />
                                <ExportExcelGroupCheckBox enumData={initialReporterInformationEnum} setDataGroup={setDataGroup4} options={groupOptions[3]} title={"Initial Reporter Information"} />
                                <ExportExcelGroupCheckBox enumData={bscSalesRepInformation} setDataGroup={setDataGroup5} options={groupOptions[4]} title={"BSC Sales Rep Information"} />
                            </Space>
                        </Card>
                        
                        <Card className='exportExcel-cardContainer'>
                            <Text className='exportExcel-cardText' strong>Event Details</Text>
                            <Divider className='exportExcel-cardDivider' style={{ border: "none", marginBottom: "0" }} />
                            <Space direction="vertical" size="middle" style={{ display: 'flex', margin:"0", padding: "0" }}>
                                <Space direction="vertical" size="middle" style={{ display: 'flex', margin:"0", padding: "0" }}>
                                    <ExportExcelGroupCheckBox enumData={eventDetail} setDataGroup={setDataGroup6} options={groupOptions[5]} title={"Event Detail"} />
                                    <ExportExcelGroupCheckBox enumData={patientInformation} setDataGroup={setDataGroup7} options={groupOptions[6]} title={"Patient Information"} />
                                    <ExportExcelGroupCheckBox enumData={cardiovascularCaseData} setDataGroup={setDataGroup8} options={groupOptions[7]} title={"Cardiovascular case data"} />
                                </Space>

                                <Card className='exportExcel-cardContainer'>
                                    <Text className='exportExcel-cardText' strong>Other Product Information</Text>
                                    <Divider className='exportExcel-cardDivider' style={{ border: "none", marginBottom: "0" }} />
                                    <Space direction="vertical" size="middle" style={{ display: 'flex', margin:"0", padding: "0" }}>
                                        <ExportExcelGroupCheckBox enumData={productType} setDataGroup={setDataGroup9} options={groupOptions[8]} title={"Product Type"} />
                                        <ExportExcelGroupCheckBox enumData={otherProductUsed} setDataGroup={setDataGroup10} options={groupOptions[9]} title={"Other Product used"} />
                                        <ExportExcelGroupCheckBox enumData={nameOfProduct} setDataGroup={setDataGroup11} options={groupOptions[10]} title={"Name of Product"} />
                                        <ExportExcelGroupCheckBox enumData={statusOfUse} setDataGroup={setDataGroup12} options={groupOptions[11]} title={"Status of Use"} />
                                    </Space>
                                </Card>
                            </Space>
                        </Card>
                    </Space>
                </Spin>
            </Modal>
        </div>
    )
}

export default ExportExcelComplaintsList
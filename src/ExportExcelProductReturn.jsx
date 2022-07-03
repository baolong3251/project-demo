import React from 'react'
import { Button, Modal, Space, Spin } from 'antd';
import { useState } from 'react';
import { ExportOutlined } from '@ant-design/icons'
import ExportExcelGroupCheckBox from './ExportExcelGroupCheckBox';
import "./style-exportExcelComplaintList.css"
import enumData from "./exportExcelEnum.json"

const enumExcel = enumData.data.product_return
const basicInformationEnum = enumExcel.basic_information
const productReturnDetailEnum = enumExcel.product_return_detail
const productComplaintInformationEnum = enumExcel.basic_complaint_information

const ExportExcelProductReturn = ({ visible, setShow }) => {
    const [dataGroup1, setDataGroup1] = useState([])
    const [dataGroup2, setDataGroup2] = useState([])
    const [dataGroup3, setDataGroup3] = useState([])
    const [loading, setLoading] = useState(false)

    const groupOptions = [
        Object.keys(basicInformationEnum),
        Object.keys(productReturnDetailEnum),
        Object.keys(productComplaintInformationEnum),
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
        ).reduce((a, v) => ({ ...a, [v]: true}), {})
        data = {exportProductReturn: data}
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
                        <ExportExcelGroupCheckBox enumData={productReturnDetailEnum} setDataGroup={setDataGroup2} options={groupOptions[1]} title={"Product Return Detail"} />
                        <ExportExcelGroupCheckBox enumData={productComplaintInformationEnum} setDataGroup={setDataGroup3} options={groupOptions[2]} title={"Basic Complaint Information"} />
                    </Space>
                </Spin>
            </Modal>
        </div>
    )
}

export default ExportExcelProductReturn
import { Button, Modal, Typography, Space, Form } from 'antd';
import { useState } from 'react';
import ExportExcelGroupCheckBox from './ExportExcelGroupCheckBox';
import { ExportOutlined } from '@ant-design/icons'

const { Title, Text, Link } = Typography;

const ExportExcelModal = ({ handleExportData, visible, children, setShow }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(visible);
    };

    const handleCancel = () => {
        setShow(false);
    };

    return (
        <>
            <Modal
                width={1000}
                title={<div style={{color: "#2e6486"}}>Select Export Fields</div>}
                visible={visible}
                onCancel={handleCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
                footer={
                    <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                        <Button onClick={() => handleExportData()} type="primary" style={{ backgroundColor: "#00558f", borderRadius: "10px" }}><ExportOutlined style={{fontSize: "16px"}}/> Export</Button>
                    </div>
                }
            >
                <Space direction="vertical" size="middle" style={{ display: 'flex', }}>
                    
                    {children}
                    
                    
                </Space>
            </Modal>
        </>
    );
};

export default ExportExcelModal;
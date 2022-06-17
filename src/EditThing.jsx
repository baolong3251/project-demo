import React, { useState } from 'react'
import { Modal, Input } from 'antd';
import { FormOutlined } from '@ant-design/icons';

function EditThing(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState(props.record.name)

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        handleEdit()
        props.success()
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleEdit = () => {
        props.changeData(props.record.key, name)
    }

    return (
        <>
            <FormOutlined style={{fontSize: "18px"}} onClick={() => showModal(props.record.key)} />

            <Modal title="Edit" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input
                    placeholder="TType something...."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { handleOk() } }}
                />

            </Modal>
        </>
    )
}

export default EditThing
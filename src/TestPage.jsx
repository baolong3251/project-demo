import { Button } from 'antd'
import React from 'react'
import { useState } from 'react'
import ExportExcelCheckBox from './ExportExcelCheckBox'
import ExportExcelModal from './ExportExcelModal'

const TestPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [dataForExport, setDataForExport] = useState([])

    const handleGetData = (value) => {
        var newArray = dataForExport
        newArray = dataForExport.find(x => x === value)
        if(newArray){

        } else { 
            setDataForExport(dataForExport.concat(value))
        }
    }

    console.log(dataForExport)

    return (
        <div>
            <Button type="primary" onClick={() => setShowModal(!showModal)}>
                Open Modal
            </Button>
            <ExportExcelModal visible={showModal} setShow={setShowModal}>
                <ExportExcelCheckBox handleGetData={handleGetData} options={["PR Status", "Product Received Date (BSC)", "Contact", "Planned-Packing Date"]} title={"Basic Information"} />
                <ExportExcelCheckBox handleGetData={handleGetData} options={["BR Status", "Product Received Date (BSC)", "Contact into", "Planned-Packing Date"]} title={"Basic Information"} />
                <ExportExcelCheckBox handleGetData={handleGetData} options={["CR Status", "Product Received Date (BSC)", "Contact", "Planned-Packing Date"]} title={"Basic Information"} />
            </ExportExcelModal>
        </div>
    )
}

export default TestPage
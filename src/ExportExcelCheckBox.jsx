import { Checkbox, Divider, Card, Typography, Space, Col, Row } from 'antd';
import { useState } from 'react';
import "./style-exportExcelCheckbox.css"

const CheckboxGroup = Checkbox.Group;

const { Text } = Typography;

const ExportExcelCheckBox = (props) => {
    const [checkedList, setCheckedList] = useState();
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const plainOptions = props.options;

    const onChange = (list) => {
        setCheckedList(list);
        props.setDataGroup(list)
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        props.setDataGroup(e.target.checked ? plainOptions : [])
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    
    return (
        <>
            <Card className='exportExcel-cardContainer'>
                <Space size={'large'}>
                    <Text style={{ color: "#2e6486" }} strong>{props.title}</Text>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        All
                    </Checkbox>
                </Space>
                <Divider style={{ border: "none", marginBottom: "0" }} />
                <CheckboxGroup value={checkedList} onChange={onChange} style={{width: "100%"}}>
                    <Row>
                        {plainOptions.map(option => {
                            return(
                                <Col style={{marginBottom: "12px"}} key={option} span={6}>
                                    <Checkbox value={option}>{option}</Checkbox>
                                </Col>
                            )
                        })}  
                    </Row>
                </CheckboxGroup>
            </Card>
        </>
    )
}

export default ExportExcelCheckBox
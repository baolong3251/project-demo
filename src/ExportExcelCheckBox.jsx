import { Checkbox, Divider, Card, Typography, Space, Form } from 'antd';
import { useState } from 'react';

const CheckboxGroup = Checkbox.Group;

const { Text } = Typography;

const ExportExcelCheckBox = (props) => {
    const [checkedList, setCheckedList] = useState();
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const plainOptions = props.options;

    const onChange = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
        props.handleGetData(list)
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
        props.handleGetData(plainOptions)
    };
    
    return (
        <>
            <Card >
                <Space size={'large'}>
                    <Text style={{ color: "#2e6486" }} strong>{props.title}</Text>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        All
                    </Checkbox>
                </Space>
                <Divider style={{ border: "none", marginBottom: "0" }} />
                <Form.Item>
                    <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                </Form.Item>
            </Card>
        </>
    )
}

export default ExportExcelCheckBox
import React, { useReducer, useState } from 'react'
import { Space, Table, Tag, Button, message } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import EditThing from './EditThing';

function TableTest() {
  const [show, setShow] = useState(true)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';

            if (tag === 'loser') {
              color = 'volcano';
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Space size="middle">
            {show && <a><EditThing record={record} changeData={changeData} success={success} /></a>}
            <a><DeleteTwoTone onClick={() => handleDelete(record.key)} /></a>
          </Space>
        </>
      ),
    },
  ];
  const [data, setData] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]);

  const handleDelete = (id) => {
    var newArray = data
    newArray = newArray.filter(x => x.key != id)
    setData(newArray)
    success()
  }

  const changeData = (id, value) => {
    var newArray = data
    var objIndex = newArray.findIndex((obj => obj.key == id));
    newArray[objIndex].name = value
    setData(newArray)
    forceUpdate()
  }

  const success = () => {
    message.success('Success');
  };
  
  return (
    <div>
      <Button type="primary" onClick={() => setShow(!show)}>Hide</Button>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default TableTest
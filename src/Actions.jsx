import React from 'react'
import { Card, Space, Form, Collapse, Input } from 'antd';
import { RightCircleOutlined, PlusCircleOutlined } from "@ant-design/icons"
import "./style-actions.css"

const { Panel } = Collapse;

const Actions = () => {
  const [form] = Form.useForm();
  return (
    <div>
      <Card className='actions'>
        <Collapse className='actions-collapse' defaultActiveKey={['1']} ghost expandIconPosition="right">
          <Panel className='actions-collapsePanel' header="Actions" key="1">
            <Form form={form} layout="vertical" autoComplete="off">
              <Form.Item className='actions-formItem' name="productReturn" label="Product Return:">
                <div className='actions-container'>
                  <Input placeholder="Waiting for Product Return" disabled />
                  <RightCircleOutlined className='actions-icon' />
                </div>
              </Form.Item>

              <Form.Item className='actions-formItem' name="productReturn" label="CRL:">
                <div className='actions-container'>
                  <Input className='actions-textInput' placeholder="Not available" disabled />
                  <PlusCircleOutlined className='actions-icon' />
                </div>
              </Form.Item>

              <Form.Item className='actions-formItem' name="productReturn" label="GFE:">
                <div className='actions-container'>
                  <Input placeholder="Not available" disabled />
                  <PlusCircleOutlined className='actions-icon' />
                </div>
              </Form.Item>

            </Form>
          </Panel>
        </Collapse>
      </Card>
    </div>
  )
}

export default Actions
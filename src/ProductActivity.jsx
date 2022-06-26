import React from 'react'
import { Timeline, Tag, Typography, Divider, Badge, Space } from 'antd';
import { CalendarOutlined, FileExcelOutlined } from "@ant-design/icons"
import "./style-productActivity.css"

const { Text } = Typography;

const ProductActivity = () => {
  return (
    <>
        <Timeline className='productActivity-timelineContainer'>
            <Timeline.Item className='productActivity-timelineItem-head' dot={ 
                <Tag color="processing" className='productActivity-timelineItem-headTag'>
                    Mon, June 13, 2022
                </Tag>}
            >
                <Divider style={{ border: "none", marginTop:"0", marginBottom: "35px" }} />
            </Timeline.Item>
            <Timeline.Item dot={<CalendarOutlined className='dotIcon' />}>
                <Space direction="vertical">
                    <Space>
                        <div style={{color: "#004072", fontWeight: "500"}}>
                            1:47 PM 
                        </div>
                        <a style={{marginLeft: "10px", color: "#004072", fontWeight: "700", textDecoration: "underline"}}>
                            Added Watcher
                        </a>
                    </Space>
                    <div>Performed by: QC QA</div>
                    <div className=''>
                        <Badge style={{marginLeft: "25px"}} color="black" /> 
                        <Space>
                            <div style={{fontWeight: "700"}}><FileExcelOutlined /> something when wrong</div> 
                            <div>somehitng</div>
                        </Space>
                    </div>
                </Space>
            </Timeline.Item>
            <Timeline.Item dot={<CalendarOutlined className='dotIcon' />}>
                <Space direction="vertical">
                    <Space>
                        <div style={{color: "#004072", fontWeight: "500"}}>
                            1:47 PM 
                        </div>
                        <a style={{marginLeft: "10px", color: "#004072", fontWeight: "700", textDecoration: "underline"}}>
                            Added Watcher
                        </a>
                    </Space>
                    <div>Performed by: QC QA</div>
                    <div className=''>
                        <Badge style={{marginLeft: "25px"}} color="black" /> 
                        <Space>
                            <div style={{fontWeight: "700"}}><FileExcelOutlined /> something when wrong</div> 
                            <div>somehitng</div>
                        </Space>
                    </div>
                    <div className=''>
                        <Badge style={{marginLeft: "25px"}} color="black" /> 
                        <Space>
                            <div style={{fontWeight: "700"}}><FileExcelOutlined /> something when wrong</div> 
                            <div>somehitng</div>
                        </Space>
                    </div>
                </Space>
            </Timeline.Item>
            <Timeline.Item className='productActivity-timelineItem-head' dot={ 
                <Tag color="processing" className='productActivity-timelineItem-headTag'>
                    Mon, June 13, 2022
                </Tag>}
            >
                <Divider style={{ border: "none", marginTop:"0", marginBottom: "35px" }} />
            </Timeline.Item>
            <Timeline.Item dot={<CalendarOutlined className='dotIcon' />}>
                <Space direction="vertical">
                    <Space>
                        <div style={{color: "#004072", fontWeight: "500"}}>
                            1:47 PM 
                        </div>
                        <a style={{marginLeft: "10px", color: "#004072", fontWeight: "700", textDecoration: "underline"}}>
                            Added Watcher
                        </a>
                    </Space>
                    <div>Performed by: QC QA</div>
                    <div className=''>
                        <Badge style={{marginLeft: "25px"}} color="black" /> 
                        <Space>
                            <div style={{fontWeight: "700"}}><FileExcelOutlined /> something when wrong</div> 
                            <div>somehitng</div>
                        </Space>
                    </div>
                </Space>
            </Timeline.Item>
        </Timeline>
    </>
  )
}

export default ProductActivity
import React from 'react'
import "./style_banner.css"
import { Card, Col, Row, Space, Typography } from 'antd';

const { Text, Title } = Typography;

const Banner = ({ children, number }) => {
    return (
        <div className="site-statistic-demo-card">
            <Row gutter={[16, 8]} className='card-container-row'>
                <Col span={6}>
                    <div className='card-container'>
                        <div align="baseline" className='card-content-container'>
                            <div className='card-content-left'>
                                {children}
                            </div>
                            <div className='card-content-right'>
                                {number}
                            </div>
                            
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Banner
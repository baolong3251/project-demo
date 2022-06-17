import { LockOutlined, UserOutlined, ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import { Row } from 'antd';
import React from 'react';
import "./style_login.css"

const { Title, Text } = Typography

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Row className='login'>
            <div className='login-left-side'>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <div className='login-form-logo'>
                        <img src='https://scontent.fsgn2-5.fna.fbcdn.net/v/t31.18172-8/15370081_188253221640379_2070757169395194286_o.png?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=NxCQy97PWGEAX87f1Fc&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT9CGTSlLBD1WsSG6ls1Rhlelq7uQIwOIiaZzj3LFByPAA&oe=62CD6E26' alt='' />
                    </div>
                    <Title style={{ textAlign: "center", color: "#0066cc", marginTop: "50px" }} level={2} className="heading">
                        Login
                    </Title>
                    <Text type="secondary" className="heading">
                        Username
                    </Text>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Text type="secondary" className="heading">
                        Password
                    </Text>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item style={{ marginTop: "30px" }}>
                        <Button style={{ color: "#0066cc", borderColor: "#0066cc" }} type="primary" shape="round" className="btn" ghost>
                            {<ArrowLeftOutlined style={{ fontSize: '13px', fontWeight: "bold" }} />} Back
                        </Button>

                        <Button style={{ backgroundColor: "#0066cc" }} type="primary" shape="round" htmlType="submit" className="btn login-form-button">
                            Login {<ArrowRightOutlined style={{ fontSize: '13px', fontWeight: "bold" }} />}
                        </Button>

                    </Form.Item>
                </Form>
            </div>
        </Row>
    );
};

export default Login;

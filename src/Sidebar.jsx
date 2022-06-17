import {
    
    UserOutlined,
    
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import "./style_sidebar.css"
const { Sider, Content } = Layout;

const Sidebar = props => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{minHeight: "100vh"}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    
                >
                    <Menu.Item key={'1'} icon={<UserOutlined />}>
                        <Link to={'/'}>Home</Link>
                    </Menu.Item>
                    <Menu.Item key={'2'} icon={<UserOutlined />}>
                        <Link to={'/something'}>something</Link>
                    </Menu.Item>
                    <Menu.Item key={'3'} icon={<UserOutlined />}>
                        <Link to={'/testpage'}>test page</Link>
                    </Menu.Item>
                    <Menu.Item key={'4'} icon={<UserOutlined />}>
                        <Link to={'/complaints'}>complaints</Link>
                    </Menu.Item>

                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content
                    className="site-layout-background"
                    style={{
                        
                        
                        minHeight: 280,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
}

export default Sidebar
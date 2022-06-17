import React from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DownOutlined,
    UserOutlined, 
    RightOutlined,
    PlusCircleOutlined,
} from '@ant-design/icons';
import { Menu, Button, Space, Dropdown, Avatar  } from 'antd';
import "./style_header.css"

const menuAccount = (
    <Menu
        items={[
            {
                label: <a href="https://www.antgroup.com">1st menu item</a>,
                key: '0',
            },
            {
                label: <a href="https://www.aliyun.com">2nd menu item</a>,
                key: '1',
            },
            {
                label: '3rd menu item',
                key: '3',
            },
        ]}
    />
);

const menuLanguage = (
    <Menu
        items={[
            {
                label: <a href="https://www.antgroup.com">1st menu item</a>,
                key: '0',
            },
            {
                label: <a href="https://www.aliyun.com">2nd menu item</a>,
                key: '1',
            },
            {
                label: '3rd menu item',
                key: '3',
            },
        ]}
    />
);


const Header = (props) => {
    return (
        <>
            <div
                className="header"
                style={{
                    padding: 0,
                }}
            >
                <div>
                    {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => props.setCollapsed(!props.collapsed),
                    })}
                    <Button type='link'>something</Button>
                
                    <RightOutlined />

                    <Button type='link'>something</Button>
                </div>

                <Space size={'large'} className='header-right'>
                    <Button type='primary' className='button-change'><PlusCircleOutlined className='button-change-icon' /> New Complaint</Button>
                    <Dropdown overlay={menuLanguage} trigger={['click']}>
                        <a className='header-right-language' onClick={e => e.preventDefault()}>
                        <Space>
                            <Avatar src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg" size="small" icon={<UserOutlined />} />
                            English
                        </Space>
                        </a>
                    </Dropdown>
                    <Dropdown overlay={menuAccount} trigger={['click']}>
                        <a className='header-right-account' onClick={e => e.preventDefault()}>
                        <Space>
                            <Avatar icon={<UserOutlined />} />
                            Name
                            <DownOutlined />
                        </Space>
                        </a>
                    </Dropdown>
                </Space>
            </div>
        </>
    )
}

export default Header
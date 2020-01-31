import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './admin-sider.css';

const { Sider } = Layout;
const { SubMenu } = Menu;

class AdminSider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    onClick(e) {
        this.props.props.history.push('/admin/' + e.key);
    }
    render() {
        return (
            <>
            <Sider theme="light" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                {this.state.collapsed ? (
                <div className="admin-sider-icon">
                    <img style={{height:32}} alt="潮汐" src ="/images/icon.png"/>
                </div>
                ) : (          
                <div className="admin-sider-logo">
                    <img style={{height:32}} alt="潮汐" src ="/images/logo2.png"/>
                </div>
                )}
                <Menu theme="light" onClick={this.onClick.bind(this)} defaultSelectedKeys={this.props.selectedKeys} defaultOpenKeys={this.props.openKeys} mode="inline">
                    <Menu.Item key="general">
                        <Icon type="pie-chart" />
                        <span>网站总览</span>
                    </Menu.Item>
                    <Menu.Item key="user">
                        <Icon type="user" />
                        <span>用户管理</span>
                    </Menu.Item>
                    <SubMenu
                    key="content"
                    title={
                    <span>
                    <Icon type="file" />
                    <span>内容管理</span>
                    </span>
                    }
                    >
                        <Menu.Item key="write">创作内容</Menu.Item>
                        <Menu.Item key="review">内容审核</Menu.Item>
                    </SubMenu>
                    <SubMenu
                    key="home-arrange"
                    title={
                    <span>
                    <Icon type="block" />
                    <span>主页管理</span>
                    </span>
                    }
                    >
                        <Menu.Item key="headline">头条新闻</Menu.Item>
                        <Menu.Item key="ad">广告位</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            </>
        );
    }
}

export default AdminSider;
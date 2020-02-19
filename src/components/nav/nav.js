import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import './nav.css';

const { SubMenu } = Menu;

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: ''
		}
	}

	handleClick = e =>{
		this.setState({
			current: e.key,
		});
	}

	render() {
		return (
			<Menu onSelect = {this.handleClick} selectedKeys = {[this.state.current]} mode = "horizontal">
				<MenuItem disabled = "True">
					<img className = "nav-logo" alt="潮汐" src = "/images/logo2.png" />
				</MenuItem>
				<Menu.Item key="home">
					<a href="/" target="_self" rel="noopener noreferrer">
					<Icon type="home"/>
					首页精选
					</a>
				</Menu.Item>
				<SubMenu title={<span className="submenu-title-wrapper"><Icon type="appstore" />栏目中心</span>}>
					<Menu.Item key="setting:1">时事</Menu.Item>
					<Menu.Item key="setting:2">体育</Menu.Item>
					<Menu.Item key="setting:3">世界</Menu.Item>
					<Menu.Item key="setting:4">社会</Menu.Item>
				</SubMenu>
				<Menu.Item key="dataPage">
					<a href="/data" target="_self" rel="noopener noreferrer">
					<Icon type="line-chart"/>
					可视数据
					</a>
				</Menu.Item>
				<Menu.Item>
					<a href="/about" target="_self" rel="noopener noreferrer">
					<Icon type="info"/>
					关于潮汐
					</a>
				</Menu.Item>
			</Menu>
		);
	}
}

export default Nav;

import { Spin , Button , Icon, Input, Form , Alert , Typography } from 'antd';
import './login-block.css';
import axios from 'axios';
import React from 'react';

const { Text } = Typography;

class LoginBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            alertVisible: false
        };
    }
    setIsLoading(status) {
        this.setState({
            data: status,
        });
    }
    handleClose = () => {
        this.setState({ alertVisible: false });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.setIsLoading(true);
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios({
                    method: 'post',
                    url: 'http://localhost:7001/api/login', // 上线后修改
                    data: values,
                }).then(
                    res=>{
                        this.setIsLoading(false);
                        if(res.data.message === '登录成功') {
                            localStorage.setItem('uid', res.data.uid);
                            localStorage.setItem('loginTime', res.data.loginTime);
                            this.props.props.history.push('/admin'); // 跳转页面，注意拿进来的props.props才有原来页面上的history
                        } else if (res.data.message === '登录失败') {
                            this.setState({ alertVisible: true });
                        }
                    }
                )
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="form-block">
                <Spin tip="加载中..." spinning={this.state.isLoading} />
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <div style={{marginBottom:5,fontSize:18}}>
                        <Text mark>&nbsp;&nbsp;</Text>
                        <Text strong>&nbsp;&nbsp;登录/注册</Text>
                    </div>
                    <div style={{minHeight:12}}>
                    {this.state.alertVisible ? (
                        <Alert
                            message="用户名或密码错误"
                            type="error"
                            closable
                            afterClose={this.handleClose}
                        />
                    ) : null}
                    </div>
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名"/>,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码"/>,
                    )}
                    </Form.Item>
                    <Button type="primary" shape="round" htmlType="submit" block>
                        <Icon type="login"/>
                        登录
                    </Button>
                    <a href="/register" target="_self" rel="noopener noreferrer">
                        <Button shape="round" style={{marginTop:8}} block>
                            <Icon type="user-add"/>
                            注册
                        </Button>
                    </a>
                </Form>
            </div>
        );
    }
}

LoginBlock = Form.create({ name: 'normal_login' })(LoginBlock);

export default LoginBlock


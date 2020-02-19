import React from 'react';
import { Input, Icon, message, Divider } from 'antd';
import axios from 'axios';
import ParticlesBg from 'particles-bg';
import Nav from '../../components/nav/nav';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            name: '',
            password: '',
        }
        this.setUserName = this.setUserName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setIsLoading = this.setIsLoading.bind(this);
        this.checkInput = this.checkInput.bind(this);
    }
    setUserName(value) {
        this.setState({
            name: value
        });
    }
    setPassword(value) {
        this.setState({
            password: value
        });
    }
    setIsLoading(value) {
        this.setState({
            isLoading: value
        });
    }
    checkInput() {
        this.setIsLoading(true);
        if(!this.state.name){
            message.error('用户名不能为空');
            return false;
        }else if(!this.state.password){
            message.error('密码不能为空');
            return false;
        }
        let dataProps = {
            'userName':this.state.name,
            'password':this.state.password
        }
        axios({
            method: 'post',
            url: 'http://127.0.0.1:7001/api/login', // 上线前修改
            data: dataProps,
            withCredentials: true
        }).then(
            res=>{
                this.setIsLoading(false);
                if(res.data.data === '登录成功'){
                    localStorage.setItem(res.cid);
                    this.props.history.push('/admin');
                } else {
                    message.error('登录失败');
                }
            }
        )
    }
    render() {
        return (
            <>
            <ParticlesBg type="cobweb" bg={true} />
            <Nav />
                <div className="login">
                    <Input
                        id="userName"
                        placeholder="用户名"
                        size="large"
                        prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{this.setUserName(e.target.value)}}
                        style={{marginBottom:20}}
                    />
                    <Input.Password
                        id="password"
                        placeholder="密码"
                        size="large"
                        prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{this.setPassword(e.target.value)}}
                        style={{marginBottom:20}}
                    />
                    <div className="login-to-register"><a href="/register">注册新用户</a></div>
                    <div className="login-button" onClick={this.checkInput} block>登录</div>
                    <Divider><div style={{fontSize:10,color:"#808080"}}>社交账号登录</div></Divider>
                    <div style={{textAlign:"center"}}>
                        <a href="#">
                            <Icon style={{fontSize:35,color:"#f3543f",marginRight:"40px"}} type="weibo-circle"/>
                        </a>
                        <a href="#">
                            <Icon style={{fontSize:35,color:"#198ef2",marginRight:"40px"}} type="qq"/>
                        </a>
                        <a href="#">
                            <Icon style={{fontSize:35,color:"#33d319"}} type="wechat"/>
                        </a>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
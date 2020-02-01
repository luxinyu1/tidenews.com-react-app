import React from 'react';
import { List, Avatar, Icon, Typography, Pagination } from 'antd';
import axios from 'axios';
import './admin-user-list.css';

const { Title } = Typography;

class AdminUserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                name: 'luxinyu',
                mail: 'luxinyu12345@foxmail.com',
                avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                uid: '123456',
                gender: 'male',
                activated: "2020-1-31",
                admin: true,
              },
              {
                name: 'luxinyu',
                mail: 'luxinyu12345@foxmail.com',
                avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                uid: '123456',
                gender: 'female',
                activated: "2020-1-31",
                admin: true,
              },
              {
                name: 'luxinyu',
                mail: 'luxinyu12345@foxmail.com',
                avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                uid: '123456',
                gender: 'male',
                activated: "2020-1-31",
                admin: false,
              },
              {
                name: 'luxinyu',
                mail: 'luxinyu12345@foxmail.com',
                avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                uid: '123456',
                gender: 'male',
                activated: "2020-1-31",
                admin: true,
              },
              {
                name: 'luxinyu',
                mail: 'luxinyu12345@foxmail.com',
                avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                uid: '123456',
                gender: 'male',
                activated: "2020-1-31",
                admin: true,
              },
              {
                name: 'luxinyu',
                mail: 'luxinyu12345@foxmail.com',
                avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                uid: '123456',
                gender: 'male',
                activated: "2020-1-31",
                admin: true,
              },
              {
                name: 'luxinyu',
                mail: 'luxinyu12345@foxmail.com',
                avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                uid: '123456',
                gender: 'male',
                activated: "2020-1-31",
                admin: true,
              },
            ]
        }
    }
    getUserList() {

    }
    componentDidMount(){
        this.getUserList();
    }
    render() {
        return(
            <div className="admin-user-list">
                <Title level={4}>用户列表</Title>
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src={item.avatarUrl} />}
                        title={item.name + " ( uid: " + item.uid + " )"}
                        description={item.mail}
                        />
                        <div>
                            最后登录：{item.activated}
                        </div>
                        <div style={{marginLeft:10, minWidth:20.8}}>
                            {item.admin ? (<Icon type="user-add"/>) : (null)}
                        </div>
                        {item.gender === "male" ? (<Icon type="man" style={{marginLeft:10, color:"blue"}}/>) : (null)}
                        {item.gender === "female" ? (<Icon type="woman" style={{marginLeft:10, color:"#eb2f96"}}/>) : (null)}
                    </List.Item>
                    )}
                />
                <div className="user-list-pagination">
                    <Pagination showTotal={() => `共有 ${this.state.data.length} 位用户`} defaultCurrent={1} pageSize={7} total={this.state.data.length} />
                </div>
            </div>
        );
    }
}

export default AdminUserList;
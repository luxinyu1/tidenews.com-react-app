import React from 'react';
import { List, Card, Tag, Typography} from 'antd';
import axios from 'axios';
import './index-content-list.css';

const { Text } = Typography;

class ContentBlock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }
    getList() {
        axios.get('http://localhost:7001/api/articleList/commonList').then( // 上线前修改
            (res) => {
                this.setState({
                    data: res.data,
                });
                // console.log(this.state.data);
            }
        );
    }
    componentDidMount(){
        this.getList();
    }
    render() {
        return (
            <List grid={{ column:4 }} dataSource={this.state.data}
                renderItem={item => (
                <List.Item>
                    <Card hoverable="Ture" cover={<img alt={item.coveralt} src={item.cover_url}/>}>
                        <h3><strong>{item.title}</strong></h3>
                        <Text type="secondary">{item.summary}</Text>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                    </Card>
                </List.Item>
            )}
            />
        );
    }
  }
  
  export default ContentBlock
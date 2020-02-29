import React from 'react';
import { Typography, Divider } from 'antd';
import axios from 'axios';
import './index-ai-weather.css';

const { Text } = Typography;

class IndexAIWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            texts: ''
        }
    }
    componentDidMount() {
        let dataProps = {
            'city': '苏州'
        }
        axios({
            method: 'post',
            url: 'http://127.0.0.1:7001/api/weather', // 上线前修改
            data: dataProps,
        }).then(
            res=>{
                let reg = /<p>/;
                let title = res.data.result.title.replace(reg, '');
                reg = /<\/p>/;
                title = title.replace(reg, '');
                this.setState({
                    title
                });
            }
        )
    }
    render() {
        return(
            <div className="index-ai-weather">
                <div style={{marginBottom:5,fontSize:16}}>
                    {this.state.title}
                    <Divider/>
                </div>
            </div>
        );
    }
}

export default IndexAIWeather;
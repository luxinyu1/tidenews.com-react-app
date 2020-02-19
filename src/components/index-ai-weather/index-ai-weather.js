import React from 'react';
import { Typography } from 'antd';
import axios from 'axios';
import './index-ai-weather.css';

const { Text } = Typography;

class IndexAIWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://aip.baidubce.com/rest/2.0/nlp/v1/gen_article?access_token=24.f4eb3f174ef50b647a010ed0d66ec4e8.2592000.1584675352.282335-18517402'
        }
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="index-ai-weather">
                <div style={{marginBottom:5,fontSize:18}}>
                    <Text mark>&nbsp;&nbsp;</Text>
                    <Text strong>&nbsp;&nbsp;AI天气</Text>
                </div>
            </div>
        );
    }
}

export default IndexAIWeather;
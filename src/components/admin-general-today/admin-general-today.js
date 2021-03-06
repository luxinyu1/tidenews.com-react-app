import React from 'react';
import { Typography, Card } from 'antd';
import { Chart, Geom, Tooltip, Axis, Legend } from "bizcharts";
import './admin-general-today.css';

const { Text,Title } = Typography;

class AdminGeneralToday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card:{
                online: 2,
                visited: 144,
                read:200,
                published:10
            },
            graph:[
                {
                    month: 'Jan',
                    city: 'China',
                    revenue: 7,
                },
                {
                    month: 'Jan',
                    city: 'Oversea',
                    revenue: 3.9,
                },
                {
                    month: 'Feb',
                    city: 'China',
                    revenue: 6.9,
                },
                {
                    month: 'Feb',
                    city: 'Oversea',
                    revenue: 4.2,
                },
                {
                    month: 'Mar',
                    city: 'China',
                    revenue: 9.5,
                },
                {
                    month: 'Mar',
                    city: 'Oversea',
                    revenue: 5.7,
                },
                {
                    month: 'Apr',
                    city: 'China',
                    revenue: 14.5,
                },
                {
                    month: 'Apr',
                    city: 'Oversea',
                    revenue: 8.5,
                },
                {
                    month: 'May',
                    city: 'China',
                    revenue: 18.4,
                },
                {
                    month: 'May',
                    city: 'Oversea',
                    revenue: 11.9,
                },
                {
                    month: 'Jun',
                    city: 'China',
                    revenue: 21.5,
                },
                {
                    month: 'Jun',
                    city: 'Oversea',
                    revenue: 15.2,
                },
                {
                    month: 'Jul',
                    city: 'China',
                    revenue: 25.2,
                },
                {
                    month: 'Jul',
                    city: 'Oversea',
                    revenue: 17,
                },
                {
                    month: 'Aug',
                    city: 'China',
                    revenue: 26.5,
                },
                {
                    month: 'Aug',
                    city: 'Oversea',
                    revenue: 16.6,
                },
                {
                    month: 'Sep',
                    city: 'China',
                    revenue: 23.3,
                },
                {
                    month: 'Sep',
                    city: 'Oversea',
                    revenue: 14.2,
                },
                {
                    month: 'Oct',
                    city: 'China',
                    revenue: 18.3,
                },
                {
                    month: 'Oct',
                    city: 'Oversea',
                    revenue: 10.3,
                },
                {
                    month: 'Nov',
                    city: 'China',
                    revenue: 13.9,
                },
                {
                    month: 'Nov',
                    city: 'Oversea',
                    revenue: 6.6,
                },
                {
                    month: 'Dec',
                    city: 'China',
                    revenue: 9.6,
                },
                {
                    month: 'Dec',
                    city: 'Oversea',
                    revenue: 4.8,
                },
            ]
        }
    }
    render() {
        const cols = {
            month: {
                range: [0, 1],
            },
        };
        return (
            <div className="admin-general-today">
                <Title level={4}>今日</Title>
                <Card>
                    <Card.Grid style={{width: '25%',textAlign: 'center'}}><Text strong>当前在线</Text><Title level={3}>{this.state.card.online}</Title></Card.Grid>
                    <Card.Grid style={{width: '25%',textAlign: 'center'}}><Text strong>今日总访问</Text><Title level={3}>{this.state.card.visited}</Title></Card.Grid>
                    <Card.Grid style={{width: '25%',textAlign: 'center'}}><Text strong>今日总阅读</Text><Title level={3}>{this.state.card.read}</Title></Card.Grid>
                    <Card.Grid style={{width: '25%',textAlign: 'center'}}><Text strong>今日总发布</Text><Title level={3}>{this.state.card.published}</Title></Card.Grid>
                </Card>
                <Chart height={400} data={this.state.graph} scale={cols} forceFit>
                <Legend />
                <Axis name="month" />
                <Axis
                    name="revenue"
                    label={{
                    formatter: val => `${val}次`,
                    }}
                />
                <Tooltip
                    crosshairs={{
                    type: 'y',
                    }}
                />
                <Geom type="line" position="month*revenue" size={2} color={'city'} />
                <Geom
                    type="point"
                    position="month*revenue"
                    size={4}
                    shape={'circle'}
                    color={'city'}
                    style={{
                    stroke: '#fff',
                    lineWidth: 1,
                    }}
                />
                </Chart>
            </div>
        );
    }
}

export default AdminGeneralToday;
import React from 'react';
import { Typography } from 'antd';
import { Chart, Geom, Tooltip, Coord, Label, View } from "bizcharts";
import DataSet from "@antv/data-set";
import './admin-general-today.css';

const { Title } = Typography;
const { DataView } = DataSet;

class AdminGeneralToday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="admin-general-today">
                <Title level={4}>今日</Title>
                目前在线人数
                今日各时段访问人数
                今日总访问量
            </div>
        );
    }
}

export default AdminGeneralToday;
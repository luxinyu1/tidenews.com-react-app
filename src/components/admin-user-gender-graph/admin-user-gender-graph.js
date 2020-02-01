import React from 'react';
import { Typography } from 'antd';
import { Chart, Geom, Tooltip, Coord, Label, View } from "bizcharts";
import DataSet from "@antv/data-set";
import './admin-user-gender-graph.css';

const { Title } = Typography;
const { DataView } = DataSet;

class AdminUserGenderGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    value: 251,
                    type: '男',
                    name: '男青少年',
                },
                {
                    value: 1048,
                    type: '男',
                    name: '男中老年',
                },
                {
                    value: 610,
                    type: '女',
                    name: '女青少年',
                },
                {
                    value: 434,
                    type: '女',
                    name: '女中老年',
                },
            ]
        }
    }
    render() {
        const dv = new DataView();
        dv.source(this.state.data).transform({
            type: 'percent',
            field: 'value',
            dimension: 'type',
            as: 'percent',
        });
        const cols = {
            percent: {
                formatter: (val) => {
                    val = `${(val * 100).toFixed(2)}%`;
                    return val;
                },
            },
        };
        const dv1 = new DataView();
        dv1.source(this.state.data).transform({
            type: 'percent',
            field: 'value',
            dimension: 'name',
            as: 'percent',
        });
        return (
            <div className="admin-user-gender-graph">
                <Title level={4}>用户画像</Title>
                <Chart
                    height={300}
                    data={dv}
                    scale={cols}
                    padding={[0, 0, 0, 0]}
                    forceFit
                >
                    <Coord type="theta" radius={0.5} />
                    <Tooltip
                    showTitle={false}
                    itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />
                    <Geom
                    type="intervalStack"
                    position="percent"
                    color="type"
                    tooltip={[
                        'type*percent',
                        (item, percent) => {
                        percent = `${(percent * 100).toFixed(2)}%`;
                        return {
                            name: item,
                            value: percent,
                        };
                        },
                    ]}
                    style={{
                        lineWidth: 1,
                        stroke: '#fff',
                    }}
                    select={false}
                    >
                    <Label content="type" offset={-10} />
                    </Geom>
                    <View data={dv1} scale={cols}>
                    <Coord type="theta" radius={0.75} innerRadius={0.5 / 0.75} />
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color={[
                        'name',
                        [
                            '#BAE7FF',
                            '#7FC9FE',
                            '#71E3E3',
                            '#ABF5F5',
                            '#8EE0A1',
                            '#BAF5C4',
                        ],
                        ]}
                        tooltip={[
                        'name*percent',
                        (item, percent) => {
                            percent = `${(percent * 100).toFixed(2)}%`;
                            return {
                            name: item,
                            value: percent,
                            };
                        },
                        ]}
                        style={{
                        lineWidth: 1,
                        stroke: '#fff',
                        }}
                        select={false}
                    >
                        <Label content="name" />
                    </Geom>
                    </View>
                </Chart>
            </div>
        );
    }
}

export default AdminUserGenderGraph;
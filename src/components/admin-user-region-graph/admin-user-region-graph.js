import React from 'react';
import { Chart, Geom, Tooltip, Legend, Coord, Axis } from 'bizcharts';
import DataSet from '@antv/data-set';
import './admin-user-region-graph.css'

class AdminUserRegionGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                  label: "Region1",
                  总用户数: 28,
                  活跃用户: 22
                },
                {
                  label: "Region2",
                  总用户数: 18,
                  活跃用户: 13
                },
                {
                  label: "Region3",
                  总用户数: 16,
                  活跃用户: 12
                },
                {
                  label: "Region4",
                  总用户数: 14,
                  活跃用户: 14
                },
                {
                  label: "Region5",
                  总用户数: 12,
                  活跃用户: 12
                }
            ]
        }
    }
    render() {
        const ds = new DataSet();
    const dv = ds.createView().source(this.state.data);
    dv.transform({
      type: "fold",
      fields: ["总用户数", "活跃用户"],
      // 展开字段集
      key: "type",
      // key字段
      value: "value" // value字段
    });
    return (
      <div className="admin-user-region-graph">
        <Chart height={400} data={dv} forceFit>
          <Legend />
          <Coord transpose scale={[1, -1]} />
          <Axis
            name="label"
            label={{
              offset: 12
            }}
          />
          <Axis name="value" position={"right"} />
          <Tooltip />
          <Geom
            type="interval"
            position="label*value"
            color={"type"}
            adjust={[
              {
                type: "dodge",
                marginRatio: 1 / 32
              }
            ]}
          />
        </Chart>
      </div>
    );
    }
}

export default AdminUserRegionGraph;
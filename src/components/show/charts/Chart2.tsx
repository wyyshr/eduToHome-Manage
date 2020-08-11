import * as React from 'react';
import { Donut } from '@ant-design/charts';
import './chart2.css'

const Chart2: React.FC = () => {
  const data = [
    {
      type: '班级一',
      value: 27,
    },
    {
      type: '班级二',
      value: 25,
    },
    {
      type: '班级三',
      value: 18,
    },
    {
      type: '班级四',
      value: 15,
    },
    {
      type: '班级五',
      value: 10,
    },
    {
      type: '班级六',
      value: 5,
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '各班级人数',
    },
    radius: 0.8,
    padding: 'auto',
    data,
    angleField: 'value',
    colorField: 'type',
    statistic: { visible: true },
  };
  return (
    <div id="Chart2">
      <Donut {...config} />
    </div>
  )
}
export default Chart2
import * as React from 'react';
import { GroupedColumn } from '@ant-design/charts';
import './chart1.css'

const data1 = [
  {
    name: '老师',
    班级: 'Jan.',
    人数: 18.9,
  },
  {
    name: '老师',
    班级: 'Feb.',
    人数: 28.8,
  },
  {
    name: '老师',
    班级: 'Mar.',
    人数: 39.3,
  },
  {
    name: '老师',
    班级: 'Apr.',
    人数: 81.4,
  },
  {
    name: '老师',
    班级: 'May',
    人数: 47,
  },
  {
    name: '老师',
    班级: 'Jun.',
    人数: 20.3,
  },
  {
    name: '老师',
    班级: 'Jul.',
    人数: 24,
  },
  {
    name: '老师',
    班级: 'Aug.',
    人数: 35.6,
  }
]
const data2 = [
  {
    name: '家长',
    班级: 'Jan.',
    人数: 12.4,
  },
  {
    name: '家长',
    班级: 'Feb.',
    人数: 23.2,
  },
  {
    name: '家长',
    班级: 'Mar.',
    人数: 34.5,
  },
  {
    name: '家长',
    班级: 'Apr.',
    人数: 99.7,
  },
  {
    name: '家长',
    班级: 'May',
    人数: 52.6,
  },
  {
    name: '家长',
    班级: 'Jun.',
    人数: 35.5,
  },
  {
    name: '家长',
    班级: 'Jul.',
    人数: 37.4,
  },
  {
    name: '家长',
    班级: 'Aug.',
    人数: 42.4,
  }
]

const Chart1: React.FC = () => {
  const data = [
    ...data1,
    ...data2
  ]
  const config = {
    title: {
      visible: true,
      text: '班级人数',
    },
    forceFit: true,
    data,
    xField: '班级',
    yField: '人数',
    yAxis: { min: 0 },
    label: { visible: true },
    groupField: 'name',
    color: ['#1ca9e6', '#f88c24'],
  };
  return (
    <div id="Chart1">
      <GroupedColumn {...config} />
    </div>
  )
}
export default Chart1
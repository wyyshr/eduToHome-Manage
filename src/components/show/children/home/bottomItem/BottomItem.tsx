import * as React from 'react';
import './bottomItem.css'
import { Space } from "antd";

/**
 * 组件BottonItem
 */
const BottonItem: React.FC = () => {
  return (
    <Space className="bottom_item" size="large">
      <div className="left_chart">1</div>
      <div className="right_chart">2</div>
    </Space>
  )
}
export default BottonItem
import * as React from 'react';
import './bottomItem.css'
import Chart1 from '../../../charts/Chart1';
import Chart2 from '../../../charts/Chart2';

/**
 * 组件BottonItem
 */
const BottonItem: React.FC = () => {
  return (
    <div className="bottom_item">
      <div className="left_chart">
        <Chart1 />
      </div>
      <div className="right_chart">
        <Chart2 />
      </div>
    </div>
  )
}
export default BottonItem
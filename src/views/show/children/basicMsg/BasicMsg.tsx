import * as React from 'react';
import TopItem from '../../../../components/show/children/home/topItem/TopItem';
import BottonItem from '../../../../components/show/children/home/bottomItem/BottomItem';

import './basicMsg.css'
/**
 * 组件：基本信息
 */
const BasicMsg: React.FC = () => {
  return (
    <div className="basic_msg">
      <div id="Top-item"><TopItem /></div>
      <div id="Bottom-item"><BottonItem /></div>
    </div>
  )
}
export default BasicMsg
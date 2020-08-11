import * as React from 'react';
import { Space } from "antd";
import { Iconfont } from "../../../../../assets/icons/icons";

import './topItem.css'

const TopItem: React.FC = () => {
  return (
    <Space className="top_item" align="center" size="large">
      <div className="class_num">
        <Iconfont className="num_icon" type="icon-banji1" />
        <span>班级：5</span>
      </div>
      <div className="techer_num">
        <Iconfont className="num_icon" type="icon-jiaoshi" />
        <span>老师：15</span>
      </div>
      <div className="parent_num">
        <Iconfont className="num_icon" type="icon-icon_jiachangduan-" />
        <span>家长：15</span>
      </div>
    </Space>
  )
}
export default TopItem
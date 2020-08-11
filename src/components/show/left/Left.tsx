import * as React from 'react';
import { Menu } from 'antd';
import { HomeOutlined,UserOutlined,UsergroupAddOutlined } from '@ant-design/icons';
import './left.css'
import { Link } from "react-router-dom";
import { RouteInterface } from "../../../assets/interface/routerInterface";

interface leftPropsType {
  routes: Array<RouteInterface>
}

const Left: React.FC<leftPropsType> = ({ routes }) => {

  const paths = routes.map(({ path }) => { return path });

  return (
    <div className="left">
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to={paths[0]} replace>基本信息</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined/>}>
          <Link to={paths[1]} replace>教师信息</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UsergroupAddOutlined/>}>
          <Link to={paths[2]} replace>家长信息</Link>
        </Menu.Item>
      </Menu>

    </div>
  )
}
export default Left
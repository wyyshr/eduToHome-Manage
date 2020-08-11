import * as React from 'react';
import { Layout, Button, Modal } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './show.css'

import { Iconfont } from "../../assets/icons/icons";

import Left from '../../components/show/left/Left';
import Context from "../../components/show/context/Context";

import { RouteInterface } from "../../assets/interface/routerInterface";
import { withRouter, RouteComponentProps } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

interface showPropsType {
  routes: Array<RouteInterface>
}
// css样式
const contentStyle = {
  margin: '24px 16px',
  padding: 24,
  minHeight: 280,
}

/**
 * 组件Show
 */
const Show: React.FC<showPropsType & RouteComponentProps> = ({ routes,history }) => {
  // state
  const [collapsed, setCollapsed] = React.useState(false)
  const [visible, setVisible] = React.useState(false)

  // 确认退出登录点击
  const handleOk = () => {
    history.replace('/')
  }

  // dom元素
  const showLeftItemDom = React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    className: 'trigger',
    onClick: () => { setCollapsed(!collapsed) },
  })
  const quitBtnDom = ( <Button className="quit_btn" onClick={()=>setVisible(true)}><Iconfont type="icon-tuichu" />退出</Button> )

  return (
    <div className="show">
      <Layout className="show_layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Left routes={routes} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {showLeftItemDom}{quitBtnDom}
          </Header>
          <Content className="site-layout-background" style={contentStyle}>
            <Context routes={routes} />
          </Content>
        </Layout>
      </Layout>
      <Modal title="退出登录" visible={visible} onOk={handleOk} onCancel={()=>setVisible(false)}>
        <p>确认退出吗？</p>
      </Modal>
    </div>
  )
}
export default withRouter(Show as any)
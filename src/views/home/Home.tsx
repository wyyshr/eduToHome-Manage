import * as React from 'react';
import { Typography, Space, Spin } from "antd";
import './home.css'
import LoginBox from '../../components/home/login/LoginBox';
import { LoadingContext } from "../../store/Store";

const { Title } = Typography

const loadingDom = <Spin size="large" tip="登录中。。。" />
const loginDom = (
  <Space direction="vertical" size={50}>
    <Title className="title">家校通后台管理</Title>
    <div className="login_box_nav">
      <LoginBox />
    </div>
  </Space>
)

const Home: React.FC = () => {
  const {loading} = React.useContext(LoadingContext)
  
  return (
    <div className="home">
        {loading ? loadingDom : loginDom}
    </div>
  )
}
export default Home
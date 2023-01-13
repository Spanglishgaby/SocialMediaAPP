import React from 'react'
import { Layout, Menu} from 'antd';
import { SmileOutlined ,HomeOutlined,EditOutlined,LogoutOutlined,CompassOutlined} from '@ant-design/icons';
import { Link ,useNavigate,Outlet } from "react-router-dom";
import logo from "./logo.png"


const { Header, Content, Sider } = Layout;

const Dashboard = ({ setUser, user }) => {
  const navigate = useNavigate();



  const handleLogOut = () => {  

    fetch(`/logout`, {method: "DELETE"}).then((res) => {
      if (res.ok) {
        setUser(null);
        navigate("/");         //redirect user to home
      }
    });
  };
  //console.log('user')
  return (
    <Layout className="box">
    <Header className="header" >
    <Link to="/">
      <img className="logo2" src={logo} alt="Logo" />
      </Link>
    </Header> 
    <Layout>
        <Sider width={300} id="sidebar">
            <Menu mode="inline">
                <Menu.Item key={0} disabled icon={<SmileOutlined />}>Hello, {user.name}</Menu.Item>
                <Menu.Item key={1} icon={<HomeOutlined  />}>
                    <Link to="/dashboard/profile">
                      Home
                    </Link>
                </Menu.Item>
                <Menu.Item key={2} icon={<EditOutlined />}>
                    <Link to={"/dashboard/edit"}>
                        Edit Profile
                    </Link>
                </Menu.Item>
                <Menu.Item key={3} icon={<CompassOutlined />}>
                    <Link to={`/dashboard/explore`}>
                        Explore
                    </Link>
                </Menu.Item>
                <Menu.Item key={4} icon={<LogoutOutlined />}onClick={handleLogOut}>
                <Link to="/">
                  Logout
                  </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    <Layout>
        <Content id='content'>
        <Outlet />
        </Content>
    </Layout>
    </Layout>
</Layout>
  )
}

export default Dashboard
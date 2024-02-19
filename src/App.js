import logo from './assets/logo-transparent-small.png';
import code from './assets/code-small.png';
import adventure from './assets/adventure.png';
import face from './assets/face.jpg';
import profile from './assets/profile.png';

import smile from './assets/smile.png';
import './App.css';
import { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, Segmented, Avatar, Divider, Row, Col, Button,  Drawer, FloatButton} from 'antd';
import Home from './components/Home';
import Work from './components/Work';
import Resume from './components/Resume'; // Import the Resume component
import Contact from './components/Contact'; // Import the Contact component
import { GithubFilled, LinkedinFilled, MailFilled, FileDoneOutlined, CodeOutlined, UserOutlined, InfoCircleOutlined  } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState('About me');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFloatButtonOpen, setIsFloatButtonOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/tasks');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const menuItems  = [
    { id: 'About me', label: 'About me', onClick: () => setCurrentPage('About me') },
    { id: 'Work', label: 'Tech profile', onClick: () => setCurrentPage('Work') },
    { id: 'Resume', label: 'Experience', onClick: () => setCurrentPage('Resume') },
  ];

  const handlePageChange = (page) => {
    (page !== "linkedin" && page !== "github" && page !== "email" && page !== "divider") ? setCurrentPage(page) : console.log();
  }

  // Render the component based on currentPage
  const renderComponent = () => {
    switch (currentPage) {
      case 'About me':
        return <Home />;
      case 'Work':
        return <Work />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Layout>
        
        {/* Sidebar (Menu) */}
        <Sider
          collapsible
          collapsedWidth={0}
          collapsed={!isMobileMenuOpen}
          onCollapse={(collapsed, type) => {
            if (type === 'clickTrigger') {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }
          }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} onClick={(e) => handlePageChange(e.key)}>
            {menuItems.map(item => (
              <Menu.Item key={item.id} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
            <Menu.Item key={'divider'} ><Divider/></Menu.Item>
            <Menu.Item key={'linkedin'} icon={<LinkedinFilled />}><a target='_blank' href='https://www.linkedin.com/in/sam-mosios'>LinkedIn</a></Menu.Item>
            <Menu.Item key={'github'} icon={<GithubFilled/>}><a target='_blank' href='https://www.github.com/samismos'>Github</a></Menu.Item>
            <Menu.Item key={'email'} icon={<MailFilled/>}><a href='mailto:samismos@yahoo.gr'>Email</a></Menu.Item>

          </Menu>
        </Sider>

        {/* Content */}
        <Layout className="site-layout">
          <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
            {renderComponent()}
          </Content>
          <FloatButton.Group trigger='click' icon={<InfoCircleOutlined />}>
            <FloatButton icon={<FileDoneOutlined />} tooltip={"Experience"} onClick={() => setCurrentPage('Resume')}></FloatButton>
            <FloatButton icon={<CodeOutlined /> } tooltip={"Work"} onClick={() => setCurrentPage('Work')}></FloatButton>
            <FloatButton icon={<UserOutlined />} tooltip={"About me"} onClick={() => setCurrentPage('About me')}></FloatButton>
          </FloatButton.Group>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
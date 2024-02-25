import './App.css';
import { useState, useEffect } from 'react';
import { Image, Layout, Menu, Divider, FloatButton } from 'antd';
import Home from './components/Home';
import TechProfile from './components/TechProfile';
import Resume from './components/Resume'; // Import the Resume component
import { GithubFilled, LinkedinFilled, MailFilled, FileDoneOutlined, CodeOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import patient from './assets/techprofile/chad.jpg';

const { Content, Sider } = Layout;

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClickOutsideMenu = (event) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const menuItems = [
    { id: 'Home', label: 'Home', onClick: () => setCurrentPage('Home') },
    { id: 'Tech profile', label: 'Tech profile', onClick: () => setCurrentPage('Tech profile') },
    { id: 'Experience', label: 'Experience', onClick: () => setCurrentPage('Experience') },
  ];

  const handlePageChange = (page) => {
    (page !== "linkedin" && page !== "github" && page !== "email" && page !== "divider") ? setCurrentPage(page) : console.log();
  }

  // Render the component based on currentPage
  const renderComponent = () => {
    switch (currentPage) {
      case 'Home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'Tech profile':
        return <TechProfile />;
      case 'Experience':
        return <Resume />;
      case 'Secret':
        return (
          <>
            <Image className='secret-image' preview={false} src={patient} />
            <h1><br />Get well soon UWU ❤️😘😱🤕🫨💁‍♀️🧑‍🦼🤸‍♀️🎗️🩰🥠♐🚾💊</h1>
          </>);
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
            <Menu.Item key={'divider'} ><Divider /></Menu.Item>
            <Menu.Item key={'linkedin'} icon={<LinkedinFilled />}><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/sam-mosios'>LinkedIn</a></Menu.Item>
            <Menu.Item key={'github'} icon={<GithubFilled />}><a target='_blank' rel="noreferrer" href='https://www.github.com/samismos'>Github</a></Menu.Item>
            <Menu.Item key={'email'} icon={<MailFilled />}><a href='mailto:samismos@yahoo.gr' rel="noreferrer">Email</a></Menu.Item>
          </Menu>
        </Sider>

        {/* Content */}
        <Layout className="site-layout">
          <Content onClick={handleClickOutsideMenu} style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
            {renderComponent()}
          </Content>
          <FloatButton.Group trigger='click' icon={<InfoCircleOutlined />} onContextMenu={() => setCurrentPage('Secret')}>
            <FloatButton icon={<UserOutlined />} tooltip={"Home"} onClick={() => setCurrentPage('Home')}></FloatButton>
            <FloatButton icon={<CodeOutlined />} tooltip={"Tech profile"} onClick={() => setCurrentPage('Tech profile')}></FloatButton>
            <FloatButton icon={<FileDoneOutlined />} tooltip={"Experience"} onClick={() => setCurrentPage('Experience')}></FloatButton>
          </FloatButton.Group>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
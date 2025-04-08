import './main.css';
import packageJson from '../package.json';
import { useState, useEffect } from 'react';
import { Layout, Menu, Divider, FloatButton, Image } from 'antd';
import Home from './components/Home';
import TechProfile from './components/TechProfile';
import Resume from './components/Resume'; // Import the Resume component
import { GithubFilled, LinkedinFilled, MailFilled, FileDoneOutlined, CodeOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import SplashScreen from './components/Splash';
import homeImage from './assets/bike.jpg';

const { Content, Sider } = Layout;

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFloatMenuOpen, setIsFloatMenuOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState();
  
  
  const image = <Image src={homeImage} preview={false} style={{ maxHeight:'50vh', borderRadius:'50%'}} />

  const handleClickOutsideMenu = (event) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setIsFloatMenuOpen(true);
    }
  };

  useEffect(() => {
    // Set a timeout to hide the splash screen after 1.5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer); // Clear the timeout when the component unmounts
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(true);
      } else {
        setIsFloatMenuOpen(true);
      }
    }, 3500);
  
    return () => clearTimeout(timeout); // cleanup
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedKey(currentPage);
  }, [currentPage])

  const menuItems = [
    { id: 'Home', label: 'Home', onClick: () => setCurrentPage('Home') },
    { id: 'Tech profile', label: 'Tech profile', onClick: () => setCurrentPage('Tech profile') },
    { id: 'Experience', label: 'Experience', onClick: () => setCurrentPage('Experience') },
  ];

  const handlePageChange = (page) => {
    (page !== "linkedin" && page !== "github" && page !== "email" && page !== "divider_1" && page !== "divider_2" && page !== "attribute")
      ? setCurrentPage(page) : console.log();
  }

  // Render the component based on currentPage
  const renderComponent = () => {
    switch (currentPage) {
      case 'Home':
        return <Home setCurrentPage={setCurrentPage} image={image} />;
      case 'Tech profile':
        return <TechProfile />;
      case 'Experience':
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div className="App">

      {showSplash ? (
        <SplashScreen />
      ) : (
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} selectedKeys={selectedKey} onClick={(e) => handlePageChange(e.key)}>
              {menuItems.map(item => (
                <Menu.Item key={item.id} icon={item.icon}>
                  {item.label}
                </Menu.Item>
              ))}
              <Menu.Item key={'divider_1'} disabled style={{ cursor: 'default' }}><Divider style={{ borderColor: 'rgba(255, 255, 255, 0.65)' }} /></Menu.Item>
              <Menu.Item key={'linkedin'} icon={<LinkedinFilled />}><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/sam-mosios'>LinkedIn</a></Menu.Item>
              <Menu.Item key={'github'} icon={<GithubFilled />}><a target='_blank' rel="noreferrer" href='https://www.github.com/samismos'>Github</a></Menu.Item>
              <Menu.Item key={'email'} icon={<MailFilled />}><a href='mailto:samismos@yahoo.gr' rel="noreferrer">Email</a></Menu.Item>
              <Menu.Item key={'divider_2'} disabled style={{ cursor: 'default' }}><Divider style={{ borderColor: 'rgba(255, 255, 255, 0.65)' }} /></Menu.Item>
              <Menu.Item key={'attribute'} style={{ cursor: 'default' }}>
                <a target='_blank' rel='noreferrer' href='https://github.com/samismos/welcome'>Sam Mosios • v{packageJson.version}</a>
              </Menu.Item>
            </Menu>
          </Sider>
          {/* Content */}
          <Layout className="site-layout">
            <Content onClick={handleClickOutsideMenu} style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
              {renderComponent()}
            </Content>
            <FloatButton.Group trigger='click' open={isFloatMenuOpen} onClick={() => setIsFloatMenuOpen(!isFloatMenuOpen)} icon={<InfoCircleOutlined />}>
              <FloatButton icon={<UserOutlined />} tooltip={"Home"} onClick={() => setCurrentPage('Home')}></FloatButton>
              <FloatButton icon={<CodeOutlined />} tooltip={"Tech profile"} onClick={() => setCurrentPage('Tech profile')}></FloatButton>
              <FloatButton icon={<FileDoneOutlined />} tooltip={"Experience"} onClick={() => setCurrentPage('Experience')}></FloatButton>
            </FloatButton.Group>
          </Layout>
        </Layout>
      )}
    </div>
  );
}

export default App;
import './main.css';
import packageJson from '../package.json';
import { useState, useEffect } from 'react';
import { Layout, Menu, Divider, Image } from 'antd';
import Home from './components/Home';
import TechProfile from './components/TechProfile';
import Resume from './components/Resume';
import BScDissertation from './components/BScDissertation';
import { GithubFilled, LinkedinFilled, MailFilled, CodeOutlined, UserOutlined, InfoCircleOutlined, ProfileOutlined, FilePdfOutlined } from '@ant-design/icons';
import SplashScreen from './components/Splash';
import ThemeSwitcher from './components/ThemeSwitcher';
import homeImage from './assets/bike.jpg';

const { Content, Sider } = Layout;

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState();
  
  
  const image = <Image src={homeImage} preview={false} style={{ maxHeight:'50vh', borderRadius:'50%'}} />

  const handleClickOutsideMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
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
      }
    }, 3500);
  
    return () => clearTimeout(timeout); // cleanup
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedKey(currentPage);
  }, [currentPage])

  const menuItems = [
    { id: 'Home', label: <span>{'Home'}</span>, onClick: () => setCurrentPage('Home') },
    { id: 'Tech profile', label: <span>{'Tech profile'}</span>, onClick: () => setCurrentPage('Tech profile') },
    { id: 'Experience', label: <span>{'Experience'}</span>, onClick: () => setCurrentPage('Experience') },
    { id: 'BSc Dissertation', label: <span>{'BSc Dissertation'}</span>, onClick: () => setCurrentPage('BSc Dissertation') },
  ];

  const dynamicMenuItems = menuItems.map(item => ({
    key: item.id,
    label: item.label,
  }));

  const handlePageChange = (page) => {
    (page !== "linkedin" && page !== "github" && page !== "email" && page !== "divider_1" && page !== "divider_2" && page !== "attribute" && page !== "theme_switcher")
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
      case 'BSc Dissertation':
        return <BScDissertation />;
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
            theme={getComputedStyle(document.documentElement).getPropertyValue('--menu-theme').trim() || 'light'}
          >
            <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['0']}
            selectedKeys={selectedKey}
            onClick={(e) => handlePageChange(e.key)}
            items={[
              {
                style: { cursor: 'default '},
                key: '1 element padding',
                label: <p></p>,
                disabled: true,
              },
                ...dynamicMenuItems,
              {
                key: 'divider_1',
                type: 'group',
                label: <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.65)' }} />,
                disabled: true,
              },
              {
                key: 'linkedin',
                icon: <LinkedinFilled />,
                label: <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sam-mosios">LinkedIn</a>,
              },
              {
                key: 'github',
                icon: <GithubFilled />,
                label: <a target="_blank" rel="noreferrer" href="https://www.github.com/sammosios">Github</a>,
              },
              {
                key: 'email',
                icon: <MailFilled />,
                label: <a href="mailto:sam.mosios@gmail.com" rel="noreferrer">Email</a>,
              },
              {
                  key: 'divider_2',
                  type: 'group',
                  label: <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.65)' }} />,
                  disabled: true,
              },
              {
                key: 'theme_switcher',
                label: <span style={{ color: 'var(--text-color)' }}><ThemeSwitcher /></span>,
              },
              {
                key: 'attribute',
                style: { cursor: 'default' },
                label: <a target='_blank' rel='noreferrer' href='https://github.com/sammosios/welcome'>Sam Mosios • v{packageJson.version}</a>,
              },
            ]}
          />
          </Sider>
          {/* Content */}
          <Layout className="site-layout" style={{ backgroundColor: 'var(--background-color)' }}>
            <Content onClick={handleClickOutsideMenu} style={{ margin: '24px 16px', padding: 24, minHeight: 280, color: 'var(--text-color)' }}>
              {renderComponent()}
            </Content>
          </Layout>
        </Layout>
      )}
    </div>
  );
}

export default App;
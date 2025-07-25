import './main.css';
import { useState, useEffect } from 'react';
import { Layout, Image } from 'antd';
import Home from './components/Home';
import TechProfile from './components/TechProfile';
import Resume from './components/Resume';
import BScDissertation from './components/BScDissertation';
import SplashScreen from './components/Splash';
import ThemeSwitcher from './components/ThemeSwitcher';
import homeImage from './assets/bike.jpg';
import SiderMenu from './components/SiderMenu';
import HamburgerButton from './components/HamburgerButton';

const { Content } = Layout;

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const image = <Image src={homeImage} preview={false} style={{ maxHeight: '50vh', borderRadius: '50%' }} />;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

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
          <HamburgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          <SiderMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <Layout className="site-layout" style={{ backgroundColor: 'var(--background-color)' }}>
            <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, color: 'var(--text-color)' }}>
              {renderComponent()}
            </Content>
          </Layout>
        </Layout>
      )}
    </div>
  );
}

export default App;
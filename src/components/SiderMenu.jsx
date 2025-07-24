import React, { useEffect, useRef } from 'react';
import { Menu } from 'antd';
import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
import { useSwipeable } from 'react-swipeable';
import './SiderMenu.css';
import ThemeSwitcher from './ThemeSwitcher';
import packageJson from '../../package.json';

const SiderMenu = ({ isOpen, onClose, setCurrentPage, currentPage }) => {
  const siderRef = useRef(null);

  // Close menu on escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    }

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleMenuClick = (page) => {
    if (page && page.startsWith('http')) {
        window.open(page, '_blank', 'noopener,noreferrer');
    } else if (page && page.startsWith('mailto:')) {
        window.location.href = page;
    }
    else if (page) {
      setCurrentPage(page);
    }
    onClose();
  };

  // Swipe to close handler
  const handlers = useSwipeable({
    onSwipedLeft: () => onClose(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Focus trap logic
  useEffect(() => {
    if (isOpen && siderRef.current) {
      const focusableElements = siderRef.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKeyPress = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else { // Tab
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };
      
      siderRef.current.addEventListener('keydown', handleTabKeyPress);
      firstElement?.focus();

      return () => {
        siderRef.current?.removeEventListener('keydown', handleTabKeyPress);
      };
    }
  }, [isOpen]);


  return (
    <>
      {/* Overlay */}
      <div className={`sider-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      
      {/* Menu */}
      <div ref={(el) => {
          siderRef.current = el;
          handlers.ref(el);
        }}
        className={`sider-menu ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[currentPage]}
          onClick={({ key }) => handleMenuClick(key)}
          items={[
            { key: 'Home', label: 'Home' },
            { key: 'Tech profile', label: 'Tech profile' },
            { key: 'Experience', label: 'Experience' },
            { key: 'BSc Dissertation', label: 'BSc Dissertation' },
            { type: 'divider' },
            { key: 'https://www.linkedin.com/in/sam-mosios', label: 'LinkedIn', icon: <LinkedinFilled /> },
            { key: 'https://www.github.com/sammosios', label: 'Github', icon: <GithubFilled /> },
            { key: 'mailto:sam.mosios@gmail.com', label: 'Email', icon: <MailFilled /> },
            { type: 'divider' },
            {
              key: 'theme_switcher',
              label: <ThemeSwitcher />,
              style: { cursor: 'default' },
              disabled: true,
            },
            {
              key: `https://github.com/sammosios/welcome/releases/tag/v${packageJson.version}`,
              label: <span>Sam Mosios • v{packageJson.version}</span>,
            },
          ]}
        />
      </div>
    </>
  );
};

export default SiderMenu;

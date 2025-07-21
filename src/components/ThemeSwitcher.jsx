
import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';

const ThemeSwitcher = () => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return document.documentElement.getAttribute('data-theme') || 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggle = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={handleToggle}
      checkedChildren="Dark"
      unCheckedChildren="Light"
    />
  );
};

export default ThemeSwitcher;

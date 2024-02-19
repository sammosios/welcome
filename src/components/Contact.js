import './contact.css';
import { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, Icon, Button, FloatButton } from 'antd';
import { LinkedinFilled, GithubFilled, MailFilled } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-item'>
            <FloatButton.Group>
                <FloatButton icon={<LinkedinFilled />} href='https://www.linkedin.com/in/sam-mosios/'/>
                <FloatButton icon={<GithubFilled />} href='https://github.com/samismos'/>
                <FloatButton icon={<MailFilled />} href='mailto:samismos@yahoo.gr'/>
            </FloatButton.Group>
            </div>
    </div> // end of app 
  );
}

export default Contact;

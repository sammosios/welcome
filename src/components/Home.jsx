import React from 'react';
import { Avatar } from 'antd';
import './components.css';
import './Home.css';
import logo from '../assets/logo-transparent-small.png';


function Home({setCurrentPage, image}) {

  return (
    <div style={{ textAlign:'center'}}>
        <h1 className='main-title'>Greetings, traveler!</h1>
        <div className="image-fade-in" >
        {image}
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p className='home-subtitle'>Welcome! I am Sam, and you can explore this website to find out about me. <br/><br/>
        As an aspiring software engineer, I am keen on expanding my knowledge and expertise in various disciplines of modern development.<br/>
        <Avatar src={logo} size={'large'}/><br/>
        Curious about what I do? Visit <span style={{ color: '#1677ff', cursor: 'pointer' }} onClick={() => setCurrentPage('Tech profile')}><u>my technical profile</u></span> to see the tools and technologies I work with,<br/> or browse <span style={{ color: '#1677ff', cursor: 'pointer' }} onClick={() => setCurrentPage('Experience')}><u>my career history</u></span> to learn about my experiences so far.
        </p>
        </div>
    </div> 
  );
}

export default Home;

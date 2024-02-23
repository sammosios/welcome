import { useState, useEffect } from 'react';
import { Avatar, Breadcrumb, Button, Image, Layout, Menu } from 'antd';
import selfie from "../assets/face.jpg"
import bike from '../assets/bike.jpg';
import './components.css';
import code from '../assets/code-small.png';
import logo from '../assets/logo-transparent-small.png';


function Home({setCurrentPage}) {
  
  return (
    <div style={{ textAlign:'center'}}>
        <h1 className='main-title'>Greetings, traveler!</h1>
        <div className="fade-in" >
        <Image  src={bike} preview={false} style={{ maxHeight:'50vh', borderRadius:'50%'}}/>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p className='home-subtitle subtitle'>Welcome! I am Sam, and you can explore this website to find out about me. <br/><br/>
        As an aspiring software developer, I am keen on expanding my knowledge and expertise in various disciplines of modern development.<br/>
        <Avatar src={logo} size={'large'}/><br/>
        Press <a onClick={() => setCurrentPage('Tech profile')}>here</a> to explore my tech profile, or <a onClick={() => setCurrentPage('Experience')}>here</a> if you want to see my career history so far.
        </p>
        </div>
    </div> 
  );
}

export default Home;

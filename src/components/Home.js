import { useState, useEffect } from 'react';
import { Avatar, Breadcrumb, Image, Layout, Menu } from 'antd';
import selfie from "../assets/face.jpg"
import bike from '../assets/bike.jpg';
import './components.css';
import code from '../assets/code-small.png';
import logo from '../assets/logo-transparent-small.png';

const { Header, Content, Footer } = Layout;

function Home() {
  
  return (
    <div>
        <h1 className='main-title'>Greetings, traveler!</h1>
        <div className="fade-in">
        <Image  src={bike} preview={false} style={{ maxHeight:'50vh', borderRadius:'50%'}}/>
        </div>
        <p className='subtitle'>Welcome! I am Sam, and you can explore this website to find out about me. </p>
        <p className='subtitle'>As an aspiring software developer, I am keen on expanding my knowledge and expertise in various disciplines of modern development.</p>
        <Avatar src={logo} size={'large'}/>
        <p className='subtitle'>In the future I would love to dip my hands in backend development, as well as cloud computing, automation and DevOps.</p>
    </div> 
  );
}

export default Home;

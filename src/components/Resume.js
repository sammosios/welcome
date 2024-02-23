import { useState, useEffect } from 'react';
import { Breadcrumb, Divider, Layout, Menu, Timeline, Tooltip, Image, Tag } from 'antd';
import Icon from '@ant-design/icons/lib/components/Icon';
import { LinkedinFilled } from '@ant-design/icons';
import './resume.css';
import tap from '../assets/tap-large.png';
import graduation from '../assets/carousel/graduation.png';

const { Header, Content, Footer } = Layout;

const Tap = ({ text }) => {
  return <i><Image style={{ width: '24px', height: '24px' }} preview={false} src={tap} /> {text}</i>
}

const Resume = () => {

  return (
    <div>
      <h1>Professional Experience</h1>
      <Timeline mode='right' items={[
        {
          label: <b>Today</b>,
          color: 'purple',
          children: <p>&nbsp;</p>,
        },
        {
          label: <b>June 2023</b>,
          children: <p>Began working as Junior Web GIS Developer @ Omikron S.A. - </p>,
        },
        {
          label: <b>March 2017</b>,
          color: 'orange',
          children: (
            <>
              <p><i>First contact with programming</i> | <a target="_blank" href='https://www.facebook.com/watchoutarc/'>
                WatchOut</a>, National Virtual Student Company Award</p>
            </>
          ),
        },
      ]}>

      </Timeline>
      <Divider />
      <h1>Academic Experience</h1>
      <Timeline mode='left' items={[
        {
          label: <b> June 2025</b>,
          color: 'green',
          children: <p>Expected Graduation</p>,
        },
        {
          label: <b>Today</b>,
          color: 'purple',
          children: <p>&nbsp;</p>,
        },
        {
          label: <b>September 2022</b>,
          children: <>
          <Tooltip placement='topLeft' title={
            <>
            <p>💡<b>Interesting projects:</b>
            <br />● Desktop parking management application with networking functionality<br/><Tag color='red'>Java</Tag><Tag color='yellow'>TCP Websockets</Tag> 
            <br />● Low-code mobile IoT app monitoring sensors in real-time<br/><Tag color='purple'>Kodular</Tag><Tag color='green'>Google Firebase</Tag>
            <br />● Desktop e-Commerce RDBMS<br/><Tag color='blue'>MySQL</Tag><Tag color='red'>MS Access</Tag>
            <br />● Virtual multi-server configuration to provide e-learning services<br/><Tag color='magenta'>Linux</Tag><Tag color='orange'>Networking</Tag><Tag color='cyan'>Virtualization</Tag></p>
            </>
          }>
          <p> Started studying Computing & Application Development @ NYC Thessaloniki<br/><Tap text={'for projects'}/></p>
          </Tooltip>

          </>
        },
        {
          label: <b> April 2022</b>,
          color: 'red',
          children: <p>Left Electrical and Computer Engineering @ AUTh </p>
        },
        {
          label: <b>September 2019</b>,
          children: (
            <>
              <Tooltip placement='topLeft' title={
                <>
                  <p>✅<b>Enjoyed subjects</b>:<i> <br />● Structured Programming<br />● Object-Oriented Programming<br />● Data Structures & Algorithms<br />● Computer Architecture etc.</i></p>
                  <p>❌<b>Did not enjoy subjects:</b><i><br />● Electric Circuits<br />● Electrical Materials<br />● Electromagnetic Field<br />●  Thermodynamics etc.</i></p>
                </>
              }>
                <p>Started studying Electrical and Computer Engineering @ AUTh<br /><Tap text={'for details'} /></p>
              </Tooltip>

            </>
          ),
        },
        {
          position: 'left',
          color: 'green',
          label: <b>June 2019</b>,
          children: (
            <>
              <Tooltip placement='topLeft' title={
                <>
                  <p><b>Aristoteleio College Graduation</b><br />June 24th, 2019</p>
                  <Image src={graduation} />
                </>
              }>
                <p><b></b>Graduated from Aristoteleio High School<br /><Tap text={'for picture'} /></p>
              </Tooltip>
            </>
          ),
        },
      ]}>

      </Timeline>
    </div> // end of app 
  );
}

export default Resume;

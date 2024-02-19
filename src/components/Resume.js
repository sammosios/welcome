import { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, Timeline } from 'antd';
import Icon from '@ant-design/icons/lib/components/Icon';
import { LinkedinFilled } from '@ant-design/icons';
import './resume.css';

const { Header, Content, Footer } = Layout;

const Resume = () => {
  
  return (
    <div>
      <Timeline mode='alternate' items={[
        {
          color: 'green',
          children: <p>Today</p>,
        },
      {
        children: <p>Began working as Junior Web GIS Developer @ Omikron S.A. - <b>2023 June</b></p>,
      },
      {
        children:<p><b>September 2022</b> - Started studying Computing & Application Development @ NYC Thessaloniki</p>
      },
      {
        color: 'red',
        children: <p>Left Electrical and Computer Engineering @ AUTh - <b>2022 April</b></p>
      },
      {
        children: (
          <>
            <p><b>2019-2022</b></p>
            <p>✅<b>Enjoyed subjects</b>:<i> Structured Programming, Object-Oriented Programming, Data Structures & Algorithms, Computer Architecture etc.</i></p>
            <p>❌<b>Did not enjoy subjects:</b><i> Electronic Circuits, Electronics, Electrical Materials, Electromagnetic Field, Thermodynamics etc.</i></p>
          </>
        ),
      },
      {
        children: (
          <>
            <p>Started studying Electrical and Computer Engineering @ AUTh - <b>2019 September</b></p>
          </>
        ),
      },
      {
        color: 'green',
        children: (
          <>
            <p><b>June 2019</b> - Graduated from Aristoteleio High School</p>
          </>
        ),
      },
      {
        color: 'orange',
        children: (
          <>
            <p><i>First contact with programming</i> | <a target="_blank" href='https://www.facebook.com/watchoutarc/'>
              WatchOut</a>, National Virtual Student Company Award - <b>March 2017</b></p>
          </>
        ),
      },
    ]}>

      </Timeline>
    </div> // end of app 
  );
}

export default Resume;

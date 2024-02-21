import { useState, useEffect } from 'react';
import { Breadcrumb, Divider, Layout, Menu, Timeline, Tooltip } from 'antd';
import Icon from '@ant-design/icons/lib/components/Icon';
import { LinkedinFilled } from '@ant-design/icons';
import './resume.css';

const { Header, Content, Footer } = Layout;

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
          children: <p> Started studying Computing & Application Development @ NYC Thessaloniki</p>
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
              <Tooltip title={
                <>
                  <p>✅<b>Enjoyed subjects</b>:<i> <br />● Structured Programming<br />● Object-Oriented Programming<br />● Data Structures & Algorithms<br />● Computer Architecture etc.</i></p>
                  <p>❌<b>Did not enjoy subjects:</b><i><br />● Electric Circuits<br />● Electrical Materials<br />● Electromagnetic Field<br />●  Thermodynamics etc.</i></p>
                </>
              }>
                <p>Started studying Electrical and Computer Engineering @ AUTh</p>
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
              <p><b></b>Graduated from Aristoteleio High School</p>
            </>
          ),
        },
      ]}>

      </Timeline>
    </div> // end of app 
  );
}

export default Resume;

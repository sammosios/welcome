import { Divider, Timeline, Tooltip, Image, Tag } from 'antd';
import './resume.css';
import tap from '../assets/tap-large.png';
import graduation from '../assets/carousel/graduation.png';

const Tap = ({ text }) => {
  return <i><Image style={{ width: '24px', height: '24px' }} preview={false} src={tap} /> {text}</i>
}

const Resume = () => {

  return (
    <div>
      <h1>Professional Experience</h1>
      <Timeline className='fade-in-right' mode='right' items={[
        {
          label: <b>Today</b>,
          color: 'purple',
          children: <p>&nbsp;</p>,
        },
        {
          label: <b>June 2023</b>,
          children: <>
          <Tooltip placement='topRight' title={
            <>
            <p>🛠️ <b>Development Projects:</b>
            <br />● Developed end-to-end comprehensive Web GIS applications
            <br/><Tag color='navy'>React.js</Tag><Tag color='darkgreen'>GeoServer</Tag> 
            <br />● Implemented Google Maps data mining application
            <br/><Tag color='#800080'>C# .NET</Tag><Tag color='#39d439'>Selenium</Tag>
            <br />● Deployed a pre-trained ML model to cloud infrastructure
            <br/><Tag color='#FFA500'>AWS EC2</Tag><Tag color='#3F00FF'>Docker</Tag>
            <br />● Monitored and maintained dedicated/cloud server infrastructure
            <br/><Tag color='fuchsia'>Linux</Tag><Tag color='#ff0000'>Grafana</Tag></p>
            </>
          }>
          <p>Junior Web GIS Developer @ Omikron S.A.<br/><Tap text={'for projects'}/></p>
          </Tooltip>
          </>
        },
        {
          label: <b>March 2017</b>,
          color: 'orange',
          children: (
            <>
              <p><i>First contact with programming</i> | <a target="_blank" rel="noreferrer" href='https://www.facebook.com/watchoutarc/'>
                WatchOut</a>, National Virtual Student Company Award</p>
            </>
          ),
        },
      ]}>

      </Timeline>
      <Divider />
      <h1>Academic Experience</h1>
      <Timeline className='fade-in-left' mode='left' items={[
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
            <p>💻 <b>Coursework Projects:</b>
            <br />● Desktop parking management application with networking functionality<br/><Tag color='red'>Java</Tag><Tag color='yellow'>TCP WebSockets</Tag> 
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
                  <p>✅ <b>Enjoyed subjects</b>: <br />● Structured Programming<br />● Object-Oriented Programming<br />● Data Structures & Algorithms<br />● Computer Architecture etc.</p>
                  <p>❌ <b>Did not enjoy subjects:</b><br />● Electric Circuits<br />● Electrical Materials<br />● Electromagnetic Field<br />●  Thermodynamics etc.</p>
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
                  <p>🎓<b>Aristoteleio College Graduation</b><br />June 24th, 2019</p>
                  <Image preview={false} src={graduation} />
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

import { Divider, Timeline, Tooltip, Image, Tag } from 'antd';
import './resume.css';
import tap from '../assets/tap-large.png';
import graduation from '../assets/carousel/graduation.png';
import team from '../assets/carousel/pfizer-sre-team.jpg';

const Tap = ({ text }) => {
  return <i><Image style={{ width: '24px', height: '24px' }} preview={false} src={tap} /> {text}</i>
}

const Resume = () => {

  return (
    <div>
      <h1>Professional Experiences</h1>
      <Timeline className='fade-in-right' mode='right' items={[
        {
          label: <b>Today</b>,
          color: 'purple',
          children: <p>&nbsp;</p>,
        },
        {
          label: <b>January 2025<br/><i style={{ fontWeight: 'lighter'}}></i></b>,
          children: <>
          <Tooltip title={
            <>
            <p>🛠️ <b>SRE Tasks:</b>
            <br />● Improved reusability of CI/CD pipelines with GitHub Actions
            <br/><Tag color='#0394fc'>Github Actions</Tag><Tag color='#7028f7'>Terraform</Tag> 
            <br />● Streamlined deployment automation and ensured consistency across Kubernetes clusters by implementing GitOps with Flux CD
            <br/><Tag color='#ff5112'>Git</Tag><Tag color='navy'>Flux</Tag><Tag color='#3970e4'>Kubernetes</Tag>
            <br />● Automated the efficient decomissioning of unused infrastructure, saving substantial cloud costs
            <br/><Tag color='#919191'>Bash</Tag><Tag color='#ff9900'>AWS</Tag>
            </p>
            </>
          }>
          <span>Associate Site Reliability Engineer @ Pfizer<br/><Tap text={'for SRE tasks'}/></span>
          </Tooltip>
          </>
        },
        {
          label: <b>July 2024 - December 2024<br/><i style={{ fontWeight: 'lighter'}}>(6 months)</i></b>,
          children: <>
          
          <Tooltip title={
                <>
                  <p><b>🎅 Team Christmas Event</b><br />December 11th, 2024</p>
                  <Image preview={false} src={team} />
                </>
              }>
          <span>Intern Site Reliability Engineer @ Pfizer<br/>
          <Tap text={'for team picture'}/>
          </span>
          </Tooltip>
          </>
        },
        {
          label: <b>June 2023 - May 2024<br/><i style={{ fontWeight: 'lighter'}}>(11 months)</i></b>,
          color: 'green',
          children: <>
          <Tooltip title={
            <>
            <p>🛠️ <b>Development Projects:</b>
            <br />● Developed end-to-end comprehensive Web GIS applications
            <br/><Tag color='navy'>React.js</Tag><Tag color='darkgreen'>GeoServer</Tag> 
            <br />● Implemented Google Maps data mining application
            <br/><Tag color='#800080'>C# .NET</Tag><Tag color='#39d439'>Selenium</Tag>
            <br />● Deployed a pre-trained ML model to cloud infrastructure
            <br/><Tag color='#FF9900'>AWS EC2</Tag><Tag color='#0db7ed'>Docker</Tag>
            <br />● Monitored and maintained dedicated/cloud server infrastructure
            <br/><Tag color='fuchsia'>Linux</Tag><Tag color='#ff5112'>Grafana</Tag></p>
            </>
          }>
          <span>Junior Web GIS Developer @ Omikron S.A.<br/><Tap text={'for projects'}/></span>
          </Tooltip>
          </>
        },
        {
          label: <b>March 2017</b>,
          color: 'orange',
          children: (
            <>
              <p><i>First touch with programming</i> | <a target="_blank" rel="noreferrer" href='https://www.facebook.com/watchoutarc/'>
                WatchOut</a>, National Virtual Student Company Award<br/><i>More details and photos in the "Projects" section of my <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sam-mosios/'>LinkedIn</a></i></p>
            </>
          ),
        },
      ]}>

      </Timeline>
      <Divider />
      <h1>Academic Experiences</h1>
      <Timeline className='fade-in-left' mode='left' items={[
        {
          label: <b> August 2025</b>,
          color: 'blue',
          children: <p>Started studying <a target='_blank' href='https://www.kth.se/en/studies/master/software-engineering-distributed-systems/msc-software-engineering-of-distributed-systems-1.8661'>Software Engineering of Distributed Systems @ KTH in Stockholm, Sweden. </a></p>,
        },
        {
          label: <b> May 2025</b>,
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
          <Tooltip title={
            <>
            <p>💻 <b>Coursework Projects:</b>
            <br />● Desktop parking management application with networking functionality<br/><Tag color='red'>Java</Tag><Tag color='yellow'>TCP WebSockets</Tag> 
            <br />● Low-code mobile IoT app monitoring sensors in real-time<br/><Tag color='purple'>Kodular</Tag><Tag color='green'>Google Firebase</Tag>
            <br />● Desktop e-Commerce RDBMS<br/><Tag color='blue'>MySQL</Tag><Tag color='red'>MS Access</Tag>
            <br />● Virtual multi-server configuration to provide e-learning services<br/><Tag color='magenta'>Linux</Tag><Tag color='orange'>Networking</Tag><Tag color='cyan'>Virtualization</Tag></p>
            </>
          }>
          <span> Started studying Computing & Application Development @ NYC Thessaloniki<br/><Tap text={'for projects'}/></span>
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
              <Tooltip title={
                <>
                  <p>✅ <b>Enjoyed subjects</b>: <br />● Structured Programming<br />● Object-Oriented Programming<br />● Data Structures & Algorithms<br />● Computer Architecture etc.</p>
                  <p>❌ <b>Did not enjoy subjects:</b><br />● Electric Circuits<br />● Electrical Materials<br />● Electromagnetic Field<br />●  Thermodynamics etc.</p>
                </>
              }>
                <span>Started studying Electrical and Computer Engineering @ AUTh<br /><Tap text={'for details'} /></span>
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
              <Tooltip title={
                <>
                  <p>🎓<b>Aristoteleio College Graduation</b><br />June 24th, 2019</p>
                  <Image preview={false} src={graduation} />
                </>
              }>
                <span><b></b>Graduated from Aristoteleio High School<br /><Tap text={'for picture'} /></span>
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

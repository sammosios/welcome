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
          label: <b>July 2024 - July 2025<br/><i style={{ fontWeight: 'lighter'}}>1 year, 1 month</i></b>,
          children: <>
          <Tooltip title={
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div>
                <p>Started as an intern and was quickly promoted to a full-time SRE role. My mission included:<br/>
                <br />● <b>Boosting CI/CD reusability</b> with GitHub Actions and Terraform.
                <br/><Tag color='#0394fc'>Github Actions</Tag><Tag color='#7028f7'>Terraform</Tag> 
                <br />● <b>Bringing order to Kubernetes deployments</b> using the magic of GitOps with Flux CD.
                <br/><Tag color='#ff5112'>Git</Tag><Tag color='navy'>Flux</Tag><Tag color='#3970e4'>Kubernetes</Tag>
                <br />● <b>Becoming a cloud cost-saving hero</b> by automating infrastructure cleanup.
                <br/><Tag color='#919191'>Bash</Tag><Tag color='#ff9900'>AWS</Tag>
                </p>
              </div>
              {/* <div>
                <p><b>🎅 Team Christmas Event</b><br />December 11th, 2024</p>
                <Image preview={false} src={team} />
              </div> */}
            </div>
          }>
            <span>Site Reliability Engineer @ Pfizer<br/><Tap text={'for details'}/></span>
          </Tooltip>
          </>
        },
        
        {
          label: <b>June 2023 - May 2024<br/><i style={{ fontWeight: 'lighter'}}>11 months</i></b>,
          color: 'green',
          children: <>
          <Tooltip title={
            <>
            <p>My quest here involved:<br/>
            <br />● <b>Crafting full-scale Web GIS applications</b> from scratch.
            <br/><Tag color='navy'>React.js</Tag><Tag color='darkgreen'>GeoServer</Tag> 
            <br />● <b>Building a data miner</b> to unearth treasures from Google Maps.
            <br/><Tag color='#800080'>C# .NET</Tag><Tag color='#39d439'>Selenium</Tag>
            <br />● <b>Launching a machine learning model</b> into the cloud with AWS and Docker.
            <br/><Tag color='#FF9900'>AWS EC2</Tag><Tag color='#0db7ed'>Docker</Tag>
            <br />● <b>Keeping the server lights on</b> and the infrastructure humming with Linux and Grafana.
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
          label: <b>Today</b>,
          color: 'purple',
          children: <p>&nbsp;</p>,
        },
        {
          label: <b> August 2025</b>,
          color: 'blue',
          children: <p>Began my <a target='_blank' href='https://www.kth.se/en/studies/master/software-engineering-distributed-systems/msc-software-engineering-of-distributed-systems-1.8661'>KTH</a> journey in Stockholm, Sweden
          <br/><i>MSc in Software Engineering of Distributed Systems</i>
          </p>,
        },
        {
          label: <b> May 2025</b>,
          color: 'green',
          children: <p>Graduated with First-Class Honours! 🎓<br/><i>Average: 84.3%</i></p>,
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
          children: (
            <>
              <Tooltip title={
                <>
                  <p><i>After exploring subjects from circuits to structured programming, I realized my true passion was in building software, not hardware. This led me to fully embrace the world of code.</i></p>
                  <p>✅ <b>Enjoyed subjects</b>: <br />● Structured & Object-Oriented Programming<br />● Data Structures & Algorithms</p>
                  <p>❌ <b>Did not enjoy subjects:</b><br />● Electric Circuits & Materials<br />● Electromagnetic Fields</p>
                </>
              }>
                <span>Pivoted from Electrical to Computer Engineering<br />
                <Tap text={'for details'} /></span>
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

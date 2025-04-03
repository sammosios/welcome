import { useState } from 'react';
import './TechProfile.css';
import CardGrid from './CardGrid';
import { Tabs, Divider } from 'antd';
import { DockerOutlined, GlobalOutlined, BranchesOutlined, LinuxOutlined, RobotOutlined } from '@ant-design/icons';
//////////// IMAGES /////////////////
import dockerk8s from '../assets/techprofile/devops/dockerk8s.jpeg';
import cicd from '../assets/techprofile/devops/cicd.jpeg';
import iac from '../assets/techprofile/devops/iac.png';
import webgis from '../assets/techprofile/webdev/webgis_m.png';
import webdev from '../assets/techprofile/webdev/webdev.png';
import backend from '../assets/techprofile/webdev/backend.jpeg';
import parking from '../assets/techprofile/genprog/parking.png';
import algorithms from '../assets/techprofile/genprog/algorithms.jpg';
import database from '../assets/techprofile/genprog/rdbms.png';
import mapsminer from '../assets/techprofile/automation/dataminer.gif';
import scripting from '../assets/techprofile/automation/scripting.png';
import servers from '../assets/techprofile/server/servers.png';
import linux from '../assets/techprofile/server/linux.png';



 ///////////////// COMPONENT /////////////////
const TechProfile = () => {

  const [activeTab, setActiveTab] = useState(1);

  const expertise = "Expertise:"; // how to call "Skills / Expertise / Knowledge / Stack" on each card

  const DevOpsItems = [
    {
      title: 'Containerization & Orchestration',
      content:
        <>
          <p>Implemented and optimized containerized workloads with Docker and Kubernetes, leveraging Kustomize to manage Custom Resource Definitions (CRDs), enhancing deployment consistency and scalability.
            <br /></p><Divider /><p><b>{expertise} Docker, Kubernetes</b></p>
        </>,
      image: dockerk8s,
    },
    {
      title: 'CI/CD & GitOps',
      content: 
      <>
        <p>Streamlined software delivery pipelines using GitHub Actions and FluxCD, enabling automated deployments and infrastructure management through GitOps principles.
          <br /></p><Divider /><p><b>{expertise} GitHub Actions, FluxCD</b></p>
      </>,
      image: cicd,
    },
    {
      title: 'Infrastructure as Code & Cloud',
      content: 
      <>
        <p>Designed and deployed scalable cloud architectures using AWS and Terraform, ensuring automation, reliability, and cost efficiency.
          <br /></p><Divider /><p><b>{expertise} AWS, Terraform</b></p>
      </>,
      image: iac,
    }
  ];
  const WebDevelopmentItems = [
    {
      title: 'Web GIS Applications',
      content:
        <>
          <p>I have contributed to the full stack development of web GIS applications,
            effectively displaying geospatial data primarily utilizing open-source web mapping libraries, as well as spatial servers and databases.
            <br /></p><Divider /><p><b>{expertise} React.js, Leaflet.js, GeoServer</b></p>
        </>,
      image: webgis,
    },
    {
      title: 'Web Fundamentals',
      content: 
      <>
        <p>Mastering web fundamentals is crucial in today's landscape. Understanding the backbone of the web
          allows me to harness powerful development frameworks and build high-quality web applications.
          <br /></p><Divider /><p><b>{expertise} HTML, CSS, JavaScript, React.js, Node.js</b></p>
      </>,
      image: webdev,
    },
    {
      title: 'Backend Development',
      content: 
      <>
        <p>Facilitating seamless information exchange between systems is an area of deep interest to me. While I do not yet have professional experience in this domain, I am actively exploring API development with Java (Spring Boot), Node.js, and Python on an experimental level to broaden my understanding of different frameworks and architectures.
          <br /></p><Divider /><p><b>{expertise} Java & Spring Boot, Node.js & Express, Python & FastAPI</b></p>
      </>,
      image: backend,
    }
  ];

  const GeneralPurposeProgrammingItems = [
    {
      title: 'Desktop Applications',
      content:
        <>
          <p>I have experience developing a variety of desktop applications, ranging from command line tools to GUI software systems with complex features.
          <br/><i><b>Image:</b></i> Par👑king - A desktop parking management solution (Java).
            <br /></p><Divider /><p><b>{expertise} C++, C# .NET, Java</b></p>
        </>,
      image: parking,
    },
    {
      title: 'Algorithm Design',
      content: <>
        <p>I am a big fan of Occam's razor. Equipped with the most appropriate data structures and algorithms for each business case,
          I aim for minimal complexity, delivering efficient, easy-to-use software solutions.
          <br /></p><Divider /><p><b>{expertise} Data Structures, Algorithm Design & Optimization</b></p> 
      </>,
      image: algorithms,
    },
    {
      title: 'Database Systems',
      content: <>
        <p> I have worked with relational databases like MySQL and PostgreSQL, and plan to explore NoSQL and cloud alternatives soon.
          <br /><i><b>Image:</b></i> e-Commerce RDBMS (MySQL, MS Access).
          <br /></p><Divider /><p><b>{expertise} Database design, MySQL, PostgreSQL</b></p>
      </>,
      image: database,
    }
  ];

  const AutomationItems = [
    {
      title: 'Manual Task Automation',
      content:
        <>
          <p>Focusing on efficiency and productivity, I specialize in automating manual tasks and helping save workhours and effort.
            <br/><i><b>Video:</b></i> Google Maps data mining tool (C# .NET  & Selenium)
            <br/></p><Divider /><p><b>{expertise} C++, C# .NET, Java</b></p>
        </>,
      image: mapsminer,
    },
    {
      title: 'Scripting',
      content: <>
        <p>Scripting tools like Bash, JavaScript and Python enable us to automate processes which improve software development, business operations or other critical parts of production.
        <br /><i><b>Example:</b></i> Developed a Bash script to automate the removal of stale Kubernetes resources, reducing cloud costs by $30,000 per month.
         
          <br/></p><Divider /><p><b>{expertise} Bash, JavaScript, Python</b></p>
      </>,
      image: scripting,
    },
  ];

  const ServerItems = [
    {
      title: 'Server Configuration',
      content:
        <>
          <p>My familiarity with the Linux operating system combined with networking fundamentals facilitates my end-to-end understanding of software.
            <br /></p><Divider /><p><b>{expertise} LAMP Stack, Ubuntu Server, Linux/Unix</b></p>
        </>,
      image: servers,
    },
    {
      title: 'Virtualization',
      content:
        <>
          <p>During my BSc studies, I was able to configure virtual systems with multiple communicating parts. 
            <br/><i><b>Image:</b></i> Jitsi Meet server, part of virtual e-Learning server ecosystem
            <br /></p><Divider /><p><b>{expertise} VirtualBox</b></p>
        </>,
      image: linux,
    },
  ];

  const tabs = [
    {
      forceRender:true,
      key: 1,
      label: `DevOps`,
      children:  <CardGrid items={DevOpsItems} />,
      icon: <DockerOutlined />,
    },
    {
      forceRender:true,
      key: 2,
      label: `Web Development`,
      children:  <CardGrid items={WebDevelopmentItems} />,
      icon: <GlobalOutlined />,
    },
    {
      forceRender:true,
      key: 3,
      label: `General Purpose Programming`,
      children: <CardGrid items={GeneralPurposeProgrammingItems} />,
      icon: <BranchesOutlined />,
    },
    {
      forceRender:true,
      key: 4,
      label: `Automation Development`,
      children: <CardGrid items={AutomationItems} />,
      icon: <RobotOutlined />,
    },
    {
      forceRender:true,
      key: 5,
      label: `Server Technologies`,
      children: <CardGrid items={ServerItems}/>,
      icon: <LinuxOutlined />,
    },
  ];

  const handleTabChange = (key) => {
    if([1,2,3,4,5].includes(Number.parseInt(key))){
      // console.log(key);
      setActiveTab(Number.parseInt(key));
    }
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Tech Profile</h1>
      <h3>Who is this Sam guy anyway?</h3>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p className='techprofile-subtitle'>
        I am a software engineer with a passion for end-to-end software development and large-scale distributed systems. I thrive on deep technical understanding, and that is why I am thrilled to pursue a master's degree in 
        
        <br /><a target='_blank' href='https://www.kth.se/en/studies/master/software-engineering-distributed-systems/msc-software-engineering-of-distributed-systems-1.8661'>Software Engineering of Distributed Systems at KTH in Stockholm, Sweden. </a>
        
        <br /><br />My work focuses on DevOps/S.R.E. practices, and I am always looking to push the boundaries of scalability, automation, and reliability.
          <br /><br /><b>You can take a look at my tech stack in the tabs below.</b>
        </p>
      </div>
      <Divider />
      <Tabs activeKey={activeTab} 
      onTabClick={(e) => handleTabChange(e)} 
      onClick={(e) => handleTabChange(e)}
      style={{ marginLeft: '10px' }}
      items={tabs} />
    </div>
  );
}

export default TechProfile;

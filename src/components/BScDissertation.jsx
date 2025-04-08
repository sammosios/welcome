import { Tooltip } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';

function BScDissertation() {

  return (
    <>
    <div style={{ textAlign: 'center' }}>
      <Tooltip
      title={
        <>This dissertation explores the application of MLOps practices to develop and deploy a traffic accident classification system. It demonstrates how automation and scalable pipelines can streamline machine learning workflows, from model training to deployment, in real-world scenarios.
        </>
      }>
      <h1>BSc Dissertation <InfoCircleOutlined /></h1>
      </Tooltip>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p className='techprofile-subtitle'>
        
        </p>
        </div>
        </div>
    <embed
    src="/welcome/Samouil_Mosios_BSc_Dissertation.pdf"
    type="application/pdf"
    scrolling="auto"
    height= '90%'
    width= '90%'
    >
    </embed>
    </>
  );
}
export default BScDissertation;

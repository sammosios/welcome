import React, { useCallback, useState } from 'react';
import { Tabs } from 'antd';
import { FilePdfOutlined, ApartmentOutlined, GithubOutlined, BranchesOutlined, FileDoneOutlined } from '@ant-design/icons';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import gha from '../assets/dissertation/gha.svg';
import k8sjob from '../assets/dissertation/job.svg';
import runners from '../assets/dissertation/azure-aks.svg';
import dataset from '../assets/dissertation/dataset.png';
import artifacts from '../assets/dissertation/artifacts.svg';
import model from '../assets/dissertation/model.png';
import evaluation from '../assets/dissertation/evaluation.png';

function BScDissertation() {

  const [activeTab, setActiveTab] = useState('document');
  const isMobile = window.innerWidth < 768;

  const tabs = [
    {
      forceRender: true,
      key: 'document',
      label: isMobile ? null : 'Document',
      icon: <FilePdfOutlined />,
    },
    {
      forceRender: true,
      key: 'flow',
      label: isMobile ? null : `System Architecture Diagram`,
      icon: <ApartmentOutlined />,
    },
  ]

  const initialNodes = [
    // The order of the elements matters!!! Put groups first.
    {
      id: 'host',
      type: 'group',
      data: { label: 'Host Machine' },
      position: { x: 50, y: 250 },
      style: {
        // backgroundColor: '#e8e1fa',
        width: 900,
        height: 260,
      },
      draggable: false
    },
    {
      id: 'cluster',
      type: 'group',
      data: { label: 'Cluster' },
      position: { x: 370, y: 30 },
      style: {
        // backgroundColor: '#e8e1fa',
        width: 530,
        height: 200,
      },
      parentId: 'host', 
      extent: 'parent',
      // expandParent: true,
    },
    {
      id: 'objectStorage',
      type: 'group',
      data: { label: 'S3 Compatible Storage' },
      position: { x: 15, y: 20 },
      style: {
        // backgroundColor: '#e8e1fa',
        width: 510,
        height: 80,
      },
      parentId: 'cluster', 
      extent: 'parent',
      // expandParent: true,
    },
    { id: '1', sourcePosition:'top', position: { x: 10, y: 150 }, data: { label: <><BranchesOutlined /><br/>Local Git Repository</> }, parentId: 'host', extent: 'parent', },
    { id: '2', sourcePosition:'right', targetPosition:'bottom', position: { x: 60, y: 100 }, data: { label: <><a target='_blank' rel="noreferrer" href='https://github.com/samismos/traffic-accidents-mlops'><GithubOutlined /><br/>GitHub Repository</a></> } },
    { id: '3', targetPosition:'left', position: { x: 250, y: 100 }, data: { label: <><img src={gha} width={15} height={15} alt="GitHub Actions"/><br/>GitHub Actions</> } },
    { id: '4', position: { x: 250, y: 180 }, data: { label: <><img src={k8sjob} width={15} height={15} alt="Updated Kubernetes Job"/><br/>Updated Job</> } },
    { id: '5', sourcePosition:'right', position: { x: 200, y: 150 }, data: { label: <><img src={runners} width={15} height={15} alt="Self-Hosted Runners"/><br/>Self-Hosted Runners</>}, parentId: 'host', extent: 'parent', },

    { id: '6', type: 'input', sourcePosition:'bottom', position: { x: 10, y: 10 }, data: { label: <><img src={dataset} width={20} height={20}/><br/>Dataset</> }, parentId: 'objectStorage', extent: 'parent', },
    { id: '7', targetPosition:'left', position: { x: 180, y: 10 }, data: { label:  <><img src={artifacts} width={20} height={20}/><br/>Processed Data Artifacts</> }, parentId: 'objectStorage', extent: 'parent', },
    { id: '8', type: 'output', targetPosition:'left', position: { x: 350, y: 10 }, data: { label: <><img src={model} width={20} height={20}/>&nbsp;<img src={evaluation} width={20} height={20} /><br/>Model & Evaluation</> }, parentId: 'objectStorage', extent: 'parent', },
    { id: '9', sourcePosition:'top', targetPosition:'left', position: { x: 110, y: 120 }, data: { label: <><img src={k8sjob} width={20} height={20} /><br/>ingest</> }, parentId: 'cluster', extent: 'parent', },
    { id: '10', sourcePosition:'top', targetPosition:'left', position: { x: 290, y: 120 }, data: { label: <><img src={k8sjob} width={20} height={20} /><br/>train_then_evaluate</> }, parentId: 'cluster', extent: 'parent', },
    
  ];
  
  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e3-4', source: '3', target: '4' },
    { id: 'e4-5', source: '4', target: '5' },
    { id: 'e5-9', source: '5', target: '9' },
    { id: 'e6-9', source: '6', target: '9' },
    { id: 'e9-7', source: '9', target: '7' },
    { id: 'e7-10', source: '7', target: '10' },
    { id: 'e10-8', source: '10', target: '8' },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );


  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%', 
        height: '90%',
      }}>
        <Tabs
          onChange={(key) => setActiveTab(key)}
          style={{ marginBottom: 16 }}
          items={tabs}
        />
        {activeTab === 'flow' && (
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            defaultEdgeOptions={{
              style: { stroke: '#1D4ED8', strokeWidth: 2 }, // nice green
              animated: true,
            }}
          >
            <Controls />
            {/* <MiniMap /> */}
            <Background variant="dots" color="#ccc" gap={12} size={2} />
          </ReactFlow>
        )}
        {activeTab === 'document' && (
          <embed
            src="/welcome/Samouil_Mosios_BSc_Dissertation.pdf"
            type="application/pdf"
            scrolling="auto"
            height='100%'
            width='90%'
          >
          </embed>
        )}
      </div>
    </>
  );
}
export default BScDissertation;

// src/App.tsx
import React from 'react';
import { Layout, Typography } from 'antd';
import IncidentTable from './components/IncidentTable';
import IncidentChart from './components/IncidentChart';
import './App.scss';

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  return (
    <Layout>
      <Header>
        <Title level={2} style={{ color: 'white' }}>Incident Management</Title>
      </Header>
      <Content style={{ padding: '20px' }}>
        <IncidentChart />
        <IncidentTable />
      </Content>
    </Layout>
  );
};

export default App;

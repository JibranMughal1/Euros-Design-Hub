import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const App: React.FC = () => (
  <>
    <Title>h1. EURO Design HUB</Title>
    <Title level={2}>h2. EURO Design HUB</Title>
    <Title level={3}>h3. EURO Design HUB</Title>
    <Title level={4}>h4. EURO Design HUB</Title>
    <Title level={5}>h5. EURO Design HUB</Title>
  </>
);

export default App;

import React from 'react';
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

const App: React.FC = () => (
  <Space vertical>
    <Text>EURO Design HUB (default)</Text>
    <Text type="secondary">EURO Design HUB (secondary)</Text>
    <Text type="success">EURO Design HUB (success)</Text>
    <Text type="warning">EURO Design HUB (warning)</Text>
    <Text type="danger">EURO Design HUB (danger)</Text>
    <Text disabled>EURO Design HUB (disabled)</Text>
    <Text mark>EURO Design HUB (mark)</Text>
    <Text code>EURO Design HUB (code)</Text>
    <Text keyboard>EURO Design HUB (keyboard)</Text>
    <Text underline>EURO Design HUB (underline)</Text>
    <Text delete>EURO Design HUB (delete)</Text>
    <Text strong>EURO Design HUB (strong)</Text>
    <Text italic>EURO Design HUB (italic)</Text>
    <Link href="https://ant.design" target="_blank">
      EURO Design HUB (Link)
    </Link>
  </Space>
);

export default App;

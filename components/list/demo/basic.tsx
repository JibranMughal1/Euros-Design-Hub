import React from 'react';
import { Avatar, List } from 'antd';

const data = [
  {
    title: 'EURO Design HUB Title 1',
  },
  {
    title: 'EURO Design HUB Title 2',
  },
  {
    title: 'EURO Design HUB Title 3',
  },
  {
    title: 'EURO Design HUB Title 4',
  },
];

const App: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="EURO Design HUB, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);

export default App;

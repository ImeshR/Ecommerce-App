import React from 'react';
import { Typography, Button, Layout, Space } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const { Title, Text } = Typography;
const { Content } = Layout;

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <Content style={{ padding: '50px', textAlign: 'center' }}>
      <Space direction="vertical" size="large">
        <Title>Welcome to Our E-Commerce Store</Title>
        {user ? (
          <Title level={3}>Hello, {user.name}! Start shopping now.</Title>
        ) : (
          <Title level={3}>Please log in or register to start shopping.</Title>
        )}
        <Button type="primary" size="large">
          <Link to="/products">View Products</Link>
        </Button>
      </Space>
    </Content>
  );
};

export default Home;
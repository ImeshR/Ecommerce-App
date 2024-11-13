import React from 'react';
import { List, Button, Typography, InputNumber, Layout, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useCart } from '../contexts/CartContext';

const { Title } = Typography;
const { Content } = Layout;

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <Content style={{ padding: '50px' }}>
      <Title level={2}>Shopping Cart</Title>
      {cart.length === 0 ? (
        <Typography.Text>Your cart is empty.</Typography.Text>
      ) : (
        <>
          <List
            itemLayout="horizontal"
            dataSource={cart}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={() => removeFromCart(item.id)}
                    danger
                  >
                    Remove
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={item.name}
                  description={`Price: $${item.price.toFixed(2)}`}
                />
                <Space>
                  <InputNumber
                    min={1}
                    value={item.quantity}
                    onChange={(value) => updateQuantity(item.id, value ?? 1)}
                  />
                  <Typography.Text strong>
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography.Text>
                </Space>
              </List.Item>
            )}
          />
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography.Title level={3}>
              Total: ${total.toFixed(2)}
            </Typography.Title>
            <Button type="primary" size="large">
              Checkout
            </Button>
          </div>
        </>
      )}
    </Content>
  );
};

export default Cart;
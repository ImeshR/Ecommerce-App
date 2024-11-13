import React from 'react';
import { Card, Button, Typography, Row, Col, Layout } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCart } from '../contexts/CartContext';

const { Title } = Typography;
const { Content } = Layout;
const { Meta } = Card;

const products = [
  { id: 1, name: 'Product 1', price: 19.99, description: 'Description for Product 1', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 29.99, description: 'Description for Product 2', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 39.99, description: 'Description for Product 3', image: 'https://via.placeholder.com/150' },
  // Add more products as needed
];

const ProductList: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <Content style={{ padding: '50px' }}>
      <Title level={2}>Products</Title>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              cover={<img alt={product.name} src={product.image} />}
              actions={[
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                >
                  Add to Cart
                </Button>,
              ]}
            >
              <Meta
                title={product.name}
                description={
                  <>
                    <p>{product.description}</p>
                    <p style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default ProductList;
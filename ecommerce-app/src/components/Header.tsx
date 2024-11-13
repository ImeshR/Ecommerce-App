import React from 'react';
import { Layout, Menu, Badge } from 'antd';
import { ShoppingCartOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AntHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="logo" style={{ color: 'white', fontSize: '1.5em' }}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          E-Commerce App
        </Link>
      </div>
      <Menu theme="dark" mode="horizontal" selectable={false}>
        <Menu.Item key="products">
          <Link to="/products">Products</Link>
        </Menu.Item>
        <Menu.Item key="cart">
          <Link to="/cart">
            <Badge count={cart.length} size="small">
              <ShoppingCartOutlined style={{ fontSize: '18px' }} />
            </Badge>
          </Link>
        </Menu.Item>
        {user ? (
          <>
            <Menu.Item key="user" icon={<UserOutlined />}>
              {user.name}
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="login">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="register">
              <Link to="/register">Register</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </AntHeader>
  );
};

export default Header;
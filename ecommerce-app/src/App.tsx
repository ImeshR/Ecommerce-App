import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Layout className="layout" style={{ minHeight: '100vh' }}>
              <Header />
              <Content style={{ padding: '0 50px' }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </Content>
            </Layout>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

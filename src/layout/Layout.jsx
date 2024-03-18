import React from 'react';
import Header from '../component/header/Header';
import AppRoutes from '../routes/AppRoutes';
import Footer from '../component/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

import React from 'react';
import Header from '../component/header/Header';
import Routers from '../routes/Routers';
import Footer from '../component/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

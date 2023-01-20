import React from 'react';
import FooterSection from '../Footer/FooterSection';
import NavBar from '../NavBar/NavBar';

const Layout = ({ children }) => {
  return (
    <div className=' z-20 absolute bg-primary/10 w-full '>
      <div className=' bg-gridLine'>
        <NavBar />
        {children}
        <FooterSection />
      </div>
    </div>
  );
};

export default Layout;

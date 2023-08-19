import React, { useState } from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <div className="d-flex">
        <div style={{ height: '100vh' }}>
          <Sidebar
            collapsed={false}
            toggled={false}
            handleToggleSidebar={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div className="container p-0 main-container-layout">
          <div>
            <Header />
            <div>{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;

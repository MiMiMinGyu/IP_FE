import React from 'react';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <div className="layout-body">
        <aside className="layout-sidebar">
        </aside>

        <main className="layout-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

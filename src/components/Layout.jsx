import { Outlet } from 'react-router-dom';
import Category from './Category';
import '../styles/Layout.css';

const Layout = () => {
  return (
    <div className="app-layout">
        
        <div className="layout-body">

        <aside className="layout-sidebar">
            <Category />
        </aside>

        <main className="layout-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

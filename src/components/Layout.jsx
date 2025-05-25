import { Outlet } from 'react-router-dom';
import Category from './Category';
import Header from './Header';
import '../styles/Layout.css';

const Layout = () => {
  return (
    <div className="app-layout">
        <header className="layout-header"> {/* 상단 헤더 */}
            <Header />
        </header>

        <div className="layout-body"> {/* 좌우 영역 분할 */}
            <aside className="layout-sidebar"> {/* 좌측 20퍼센트 카테고리 */}
                <Category />
            </aside>

            <main className="layout-content"> {/* 우측 80퍼센트 메인 */}
            <Outlet />
            </main>
        </div>
    </div>
  );
};

export default Layout;

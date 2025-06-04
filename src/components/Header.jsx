import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import everyThingLogo from '../assets/images/ui/everyThingLogo.png';
import MyPageModal from '../components/MyPage';
import '../styles/Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showMyPageModal, setShowMyPageModal] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/');
    };

    const handleMyPage = () => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setShowMyPageModal(true);
        } else {
            alert('로그인이 필요한 서비스입니다.');
            navigate('/login');
        }
    };

    return (
        <>
        <header className="header-container">
            <div className="header-logo" onClick={() => navigate('/')}>
                <img src={everyThingLogo} alt="everyThing" className="header-logo-image" />
            </div>

            <nav className="header-nav">
                <button className="header-search-button"> 🔎검색 </button>
                
                {isLoggedIn ? (
                    <>
                        <button className="header-logout-button" onClick={handleLogout}> 로그아웃 </button>
                    </>
                ): (
                    <button className="header-login-button" onClick={() => navigate('/login')}> 로그인 </button>
                )}
                <button className="header-mypage-button" onClick={handleMyPage}> 마이페이지 </button>
            </nav>
        </header>

        {showMyPageModal && (
            <MyPageModal onClose={() => setShowMyPageModal(false)} />
        )}
    </>
    );
};

export default Header;
import { useNavigate } from 'react-router-dom';
import everyThingLogo from '../assets/images/ui/everyThingLogo.png';
import '../styles/Header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header-container">
            <div className="header-logo" onClick={() => navigate('/')}>
                <img src={everyThingLogo} alt="everyThing" className="header-logo-image" />
            </div>

            <nav className="header-nav">
                <button className="header-search-button"> 🔎검색 </button>
                <button className="header-login-button" onClick={() => navigate('/login')}> 로그인 </button>
                <button className="header-mypage-button"> 마이페이지 </button>
            </nav>
        </header>
    );
};

export default Header;
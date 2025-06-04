import '../../../styles/Page.css';
import './AcademicIntro.css';
import ictImg from '../../../assets/images/pages/ICT.png';

const AcademicIntro = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">학과 소개</h1>

      <div className="intro-banner">
        <img src={ictImg} alt="정보통신공학과" className="intro-image" />

        <div className="intro-content">
          <h2 className="intro-slogan">“미래를 연결하는 기술, 세상을 움직이는 엔지니어.”</h2>
          <p className="intro-highlight">
            정보통신공학과는 인공지능, 사물인터넷, 5G, 빅데이터 등 첨단 기술을 바탕으로
            세상을 혁신하는 인재를 키워냅니다.
          </p>
          <p className="intro-text">
            스마트폰에서 자율주행차까지, 우리가 살아가는 모든 기술의 중심엔 정보통신이 있습니다.<br />
            여러분도 기술로 세상을 바꾸는 주인공이 되어보세요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicIntro;
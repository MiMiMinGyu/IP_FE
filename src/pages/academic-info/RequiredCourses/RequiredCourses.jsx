import '../../styles/Page.css';

const RequiredCourses = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">필수 과목 안내</h1>
      <p className="page-description">학년별 필수 및 추천 전공 과목을 소개합니다.</p>

      {/* 이미지 경로는 public 폴더 기준 */}
      <img
        src="/images/course-image.png"
        alt="전공 과목 안내 이미지"
        style={styles.image}
      />

      {/* 1학년 */}
      <div style={styles.section}>
        <h2 style={styles.heading}>📘 1학년</h2>
        <ul>
          <li><strong>C언어:</strong> 절차지향 언어 C를 통해 프로그래밍 기초 습득</li>
          <li><strong>객체지향프로그래밍1:</strong> 클래스와 객체를 기반으로 한 OOP 원리 학습</li>
        </ul>
      </div>

      {/* 2학년 */}
      <div style={styles.section}>
        <h2 style={styles.heading}>📗 2학년</h2>
        <ul>
          <li><strong>데이터통신:</strong> 통신의 기본 개념과 프로토콜, OSI 7계층 등 이해</li>
          <li><strong>디지털논리회로:</strong> 논리게이트, 플립플롭 등 디지털 회로 설계 기초</li>
          <li><strong>신호및시스템:</strong> 신호의 특성과 시스템 반응에 대한 분석</li>
          <li><strong>인공지능수학:</strong> 선형대수, 확률 등 AI 수학 기초</li>
          <li><strong>회로이론:</strong> 전기 회로의 기본 개념과 해석법</li>
          <li><strong>파이썬:</strong> 데이터 처리 및 자동화를 위한 Python 기초</li>
          <li><strong>데이터구조:</strong> 스택, 큐, 트리 등 자료구조 설계 및 활용</li>
          <li><strong>사물인터넷기초:</strong> IoT 개념과 구성요소, 센서 기초</li>
          <li><strong>자바:</strong> 객체지향 언어 Java를 활용한 SW 개발</li>
          <li><strong>전자기학:</strong> 전자파, 전기장 등 통신 전자기 이론 기초</li>
          <li><strong>전자회로:</strong> 다이오드, 트랜지스터 등 전자회로 해석</li>
          <li><strong>확률및랜덤프로세스:</strong> 통신 및 신호처리 관련 확률론</li>
        </ul>
      </div>

      {/* 3학년 */}
      <div style={styles.section}>
        <h2 style={styles.heading}>📙 3학년</h2>
        <ul>
          <li><strong>기계학습:</strong> 머신러닝 기초 이론 및 알고리즘 실습</li>
          <li><strong>데이터베이스:</strong> 관계형 DB 설계와 SQL 활용</li>
          <li><strong>모바일프로그래밍:</strong> Android 등 앱 개발 기술</li>
          <li><strong>정보보안:</strong> 보안 기술과 암호화 원리</li>
          <li><strong>컴퓨터구조:</strong> CPU, 메모리 등 하드웨어 구조</li>
          <li><strong>멀티미디어통신(예정):</strong> 오디오/비디오 데이터 전송 기술</li>
          <li><strong>IT신기술세미나1:</strong> 최신 IT 동향 발표 및 토론</li>
          <li><strong>네트워크프로토콜:</strong> TCP/IP 등 통신 규약</li>
          <li><strong>데이터마이닝및시각화:</strong> 분석 및 시각화 기법</li>
          <li><strong>디지털신호처리:</strong> 필터링 등 신호처리 알고리즘</li>
          <li><strong>딥러닝:</strong> 심층 신경망 기반 AI 모델 학습</li>
          <li><strong>센서기반사물인터넷:</strong> 센서 + 네트워크 IoT 구현</li>
          <li><strong>IoT보안:</strong> IoT 환경 보안 기술</li>
          <li><strong>Vision 및 AI응용(예정):</strong> 컴퓨터 비전과 AI 융합</li>
          <li><strong>IT신기술세미나2:</strong> 후속 심화 세미나</li>
        </ul>
      </div>

      {/* 4학년 */}
      <div style={styles.section}>
        <h2 style={styles.heading}>📕 4학년</h2>
        <ul>
          <li><strong>알고리즘:</strong> 탐색, 정렬, 동적계획법 등 설계/분석</li>
          <li><strong>이동통신:</strong> 무선통신 원리와 셀룰러 구조</li>
          <li><strong>인터넷프로그래밍:</strong> 웹 및 서버-클라이언트 구조</li>
          <li><strong>임베디드시스템:</strong> 하드웨어 제어용 SW 설계</li>
          <li><strong>캡스톤디자인1/2:</strong> 실무형 팀 프로젝트</li>
          <li><strong>광통신:</strong> 광섬유 통신 원리 및 응용</li>
          <li><strong>최신AI이론및응용(예정):</strong> 최신 AI 알고리즘 및 실무</li>
          <li><strong>빅데이터분석:</strong> 대용량 데이터 처리와 분석</li>
          <li><strong>영상처리:</strong> 이미지 필터링, 패턴 인식</li>
          <li><strong>SoC시스템:</strong> 시스템 온 칩 설계와 응용</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  image: {
    width: '100%',
    maxWidth: '700px',
    borderRadius: '12px',
    margin: '24px 0',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  section: {
    marginBottom: '32px',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '12px',
  },
};

export default RequiredCourses;

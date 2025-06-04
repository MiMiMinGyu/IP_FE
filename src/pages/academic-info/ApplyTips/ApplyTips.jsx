import '../../styles/Page.css';

const ApplyTips = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">수강 신청 안내</h1>

      <div style={styles.section}>
        <h2 style={styles.heading}>⏰ 수강신청 시간</h2>
        <p style={styles.text}>10:00 ~ 17:00</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>🔐 로그인 정보</h2>
        <p><strong>ID:</strong> 사용자 학번</p>
        <p><strong>비밀번호:</strong> SSO 통합 로그인 비밀번호 (종합정보, 홈페이지 동일)</p>
        <p><strong>신입생 초기 비밀번호:</strong> 주민등록번호 앞자리 6자리</p>
        <p style={styles.warning}>
          ※ 타인의 수강신청을 방해할 경우 강제 삭제 및 제재 가능<br/>
          ※ 비밀번호는 본인이 철저히 관리해야 합니다.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>📞 수강신청 문의처</h2>
        <p><strong>교양/방목기초 교양</strong></p>
        <ul>
          <li>자연계열: 031-330-6635</li>
          <li>인문계열: 02-300-0855</li>
        </ul>
        <p><strong>전공 교과목:</strong> 해당 학과 사무실</p>
        <p><strong>기타 문의:</strong></p>
        <ul>
          <li>자연계열: 031-330-6024</li>
          <li>인문계열: 02-300-1473</li>
        </ul>
        <p><strong>시스템 오류 관련:</strong> 031-330-6101 (정보지원팀)</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>⚠ 매크로 사용 금지</h2>
        <p style={styles.warning}>
          매크로 프로그램 사용 시 수강신청 금지 및 삭제 처리됩니다.<br/>
          서버 속도 저하 및 장애를 유발하며, 타인에게 피해가 발생할 경우 <strong>강제 삭제 및 제재</strong>가 이루어집니다.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>🔗 관련 링크</h2>
        <ul>
          <li>
            수강신청 사용설명서: <a href="/manual_ko.pdf" target="_blank" rel="noopener noreferrer">[다운로드하기]</a>
          </li>
          <li>
            학생정보시스템(SIMS): <a href="https://sso1.mju.ac.kr/login.do?redirect_uri=https://msi.mju.ac.kr/index_Myiweb.jsp" target="_blank" rel="noopener noreferrer">[바로가기]</a>
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>🎓 1학년 추천 과목</h2>
        <ul>
          <li>C언어 (전공)</li>
          <li>미적분학1</li>
          <li>영어1 / 영어3</li>
          <li>영어회화1 / 영어회화3</li>
          <li>4차산업혁명과미래사회진로선택 또는 디지털리터러시의이해</li>
          <li>채플</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>📱 에브리타임 활용 팁</h2>
        <ul>
          <li>강의평가, 교수/과목 검색 기능으로 선배들의 강의 리뷰 확인 가능</li>
          <li>시간표 기능으로 과목 겹침 없이 스케줄 구성 가능</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  section: {
    marginBottom: '24px',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  text: {
    fontSize: '16px',
  },
  warning: {
    backgroundColor: '#fff4e5',
    padding: '12px',
    borderRadius: '6px',
    color: '#a94442',
    fontWeight: 'bold',
  },
};

export default ApplyTips;

import '../../../styles/Page.css';

const ClassroomNumberGuide = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">강의실 번호 읽는 법</h1>

      <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={itemStyle}>
          <div style={circleStyle}>Y</div>
          <div style={textStyle}>Y는 용인, 자연캠퍼스를 의미합니다.</div>
        </div>
        <div style={itemStyle}>
          <div style={circleStyle}>5</div>
          <div style={textStyle}>다음 자릿수는 건물 번호를 의미합니다 (예: 제5공학관은 5).</div>
        </div>
        <div style={itemStyle}>
          <div style={circleStyle}>5</div>
          <div style={textStyle}>그 다음 자릿수는 층수를 의미합니다 (예: 5층).</div>
        </div>
        <div style={itemStyle}>
          <div style={circleStyle}>3</div>
          <div style={textStyle}>이후 숫자는 강의실 번호를 의미합니다.</div>
        </div>

        <div style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '12px' }}>📍 강의실 번호 예시</h2>
          <ul style={{ lineHeight: '1.8', paddingLeft: '16px' }}>
            <li><strong>Y1xx</strong> 제1공학관</li>
            <li><strong>Y2xx</strong> 창조예술관</li>
            <li><strong>Y3xx</strong> 명진당</li>
            <li><strong>Y5xx</strong> 제5공학관</li>
            <li><strong>Y6xx</strong> 예체능관</li>
            <li><strong>Y8xx</strong> 제2공학관</li>
            <li><strong>Y9xx</strong> 함박관</li>
            <li><strong>Y12xx</strong> 디자인조형센터</li>
            <li><strong>Y13xx</strong> 제4공학관</li>
            <li><strong>Y19xx</strong> 제3공학관</li>
            <li><strong>Y22xx</strong> 60주년채플관</li>
            <li><strong>Y23xx</strong> 차세대과학관</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
};

const circleStyle = {
  width: '40px',
  height: '40px',
  backgroundColor: '#f4b13f',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '20px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '12px',
};

const textStyle = {
  fontSize: '16px',
};

export default ClassroomNumberGuide;

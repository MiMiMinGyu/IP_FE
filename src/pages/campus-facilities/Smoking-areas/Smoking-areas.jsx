import '../../../styles/Page.css';

const SmokingAreas = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">주차장 안내</h1>

      <div style={styles.container}>
        {/* 학생 주차장 A */}
        <div style={styles.row}>
          <div style={styles.imageBox}>주차장</div>
          <div style={styles.imageBox}>주차장 위치 사진</div>
          <div style={styles.textBox}>
            <p style={styles.name}>학생 주차장 A</p>
            <p>설명 : 5공학관이나 1공학관을 쓰는 학우분들 추천</p>
            <p>위치 : 체플관 뒷편</p>
          </div>
        </div>

        <hr style={styles.divider} />

        {/* 길거리 주차 */}
        <div style={styles.row}>
          <div style={styles.imageBox}>주차장</div>
          <div style={styles.imageBox}>주차장 위치 사진</div>
          <div style={styles.textBox}>
            <p style={styles.name}>길거리 주차</p>
            <p>설명 : @@@@</p>
            <p>위치 : 도로 근처</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginTop: '24px',
  },
  row: {
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
  },
  imageBox: {
    width: '200px',
    height: '120px',
    backgroundColor: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  textBox: {
    flex: 1,
    fontSize: '14px',
    lineHeight: '1.6',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #ccc',
    margin: '16px 0',
  },
};

export default SmokingAreas;

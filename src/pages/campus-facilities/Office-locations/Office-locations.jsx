import '../../../styles/Page.css';

const OfficeLocations = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">학과 사무실 및 오피스 위치</h1>

      <div style={styles.container}>
        {/* 교학팀 */}
        <div style={styles.row}>
          <div style={styles.imageBox}>학과 사무실 사진</div>
          <div style={styles.imageBox}>학과 사무실 위치 사진</div>
          <div style={styles.textBox}>
            <p style={styles.officeName}>교학팀</p>
            <p>설명 :</p>
            <p>위치 : 단과대 6층</p>
          </div>
        </div>

        <hr style={styles.divider} />

        {/* &&팀 */}
        <div style={styles.row}>
          <div style={styles.imageBox}>학과 사무실 사진</div>
          <div style={styles.imageBox}>학과 사무실 위치 사진</div>
          <div style={styles.textBox}>
            <p style={styles.officeName}>&&팀</p>
            <p>설명 : 유교결석계 제출</p>
            <p>위치 : 5공학관 10층</p>
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
  officeName: {
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #ccc',
    margin: '16px 0',
  },
};

export default OfficeLocations;

